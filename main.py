from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
import routers.onboarding as onboarding
import routers.devices as devices

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="IoTrust",
    description="Secure onboarding & management of IoT devices",
    version="1.0"
)

# ✅ CORS CONFIGURATION (THIS IS THE FIX)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(onboarding.router)
app.include_router(devices.router)
