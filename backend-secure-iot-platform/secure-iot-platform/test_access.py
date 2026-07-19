import requests

token = "e5680fd3335bc75c17cbb68153cdc298d34b1c6b063835dd5c4091b2040628d5"

response = requests.get(
    "http://127.0.0.1:8000/devices/all",
    headers={
        "Authorization": f"Bearer {token}"
    }
)

print("Status Code:", response.status_code)
print("Response:", response.json())
