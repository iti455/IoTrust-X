from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models, schemas
from crypto_utils import hash_secret
import secrets
from crypto_utils import verify_secret

router = APIRouter(prefix="/onboard", tags=["Onboarding"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register")
def register_device(
    request: schemas.DeviceRegister,
    db: Session = Depends(get_db)
):
    existing = db.query(models.Device).filter(
        models.Device.device_id == request.device_id
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Device already exists")

    hashed_secret = hash_secret(request.device_secret)

    device = models.Device(
        device_id=request.device_id,
        device_secret_hash=hashed_secret,
        status="pending"
    )

    db.add(device)
    db.commit()
    db.refresh(device)

    return {
        "message": "Device onboarded successfully",
        "device_id": device.device_id,
        "status": device.status
    }

@router.post("/authenticate")
def authenticate_device(
    request: schemas.DeviceAuth,
    db: Session = Depends(get_db)
):
    device = db.query(models.Device).filter(
        models.Device.device_id == request.device_id
    ).first()

    if not device:
        raise HTTPException(status_code=404, detail="Device not found")

    if not verify_secret(request.device_secret, device.device_secret_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Generate secure token
    token = secrets.token_hex(32)
    device.access_token = token

    db.commit()

    return {
        "message": "Device authenticated",
        "access_token": token
    }
