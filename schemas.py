from pydantic import BaseModel

class DeviceRegister(BaseModel):
    device_id: str
    device_secret: str

class DeviceResponse(BaseModel):
    id: int
    device_id: str
    status: str
    certificate_issued: bool
    firmware_version: str

class Config:
    from_attributes = True
    
class DeviceAuth(BaseModel):
    device_id: str
    device_secret: str