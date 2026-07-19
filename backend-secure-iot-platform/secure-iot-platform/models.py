from sqlalchemy import Column, Integer, String, Boolean
from database import Base

class Device(Base):
    __tablename__ = "devices"

    id = Column(Integer, primary_key=True, index=True)
    device_id = Column(String, unique=True, index=True, nullable=False)

    device_secret_hash = Column(String, nullable=False)

    status = Column(String, default="pending")  # pending / approved / revoked
    certificate_issued = Column(Boolean, default=False)
    firmware_version = Column(String, default="1.0")
    access_token = Column(String, nullable=True, unique=True)
