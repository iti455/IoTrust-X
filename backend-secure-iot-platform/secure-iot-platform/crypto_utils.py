from passlib.context import CryptContext

pwd_context = CryptContext(
    schemes=["pbkdf2_sha256"],
    deprecated="auto"
)

def hash_secret(secret: str) -> str:
    return pwd_context.hash(secret)

def verify_secret(secret: str, hashed: str) -> bool:
    return pwd_context.verify(secret, hashed)
