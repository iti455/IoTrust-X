from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models

router = APIRouter(prefix="/devices", tags=["Devices"])


# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🔐 Token verification dependency
def verify_device_token(
    authorization: str = Header(...)
):
    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Invalid authorization header"
        )

    token = authorization.replace("Bearer ", "")

    db = SessionLocal()
    device = db.query(models.Device).filter(
        models.Device.access_token == token
    ).first()
    db.close()

    if not device:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )

    return device


# 📡 Protected endpoint – List all devices
@router.get("/all")
def list_devices(
    current_device=Depends(verify_device_token),
    db: Session = Depends(get_db)
):
    devices = db.query(models.Device).all()

    return [
        {
            "id": d.id,
            "device_id": d.device_id,
            "status": d.status,
            "certificate_issued": d.certificate_issued,
            "firmware_version": d.firmware_version
        }
        for d in devices
    ]


# Admin endpoint – Approve device
@router.post("/approve/{device_id}")
def approve_device(
    device_id: str,
    db: Session = Depends(get_db)
):
    device = db.query(models.Device).filter(
        models.Device.device_id == device_id
    ).first()

    if not device:
        raise HTTPException(
            status_code=404,
            detail="Device not found"
        )

    device.status = "approved"
    db.commit()

    return {
        "message": "Device approved successfully",
        "device_id": device_id,
        "status": "approved"
    }
