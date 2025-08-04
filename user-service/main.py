from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "user-service root endpoint - User registration and profile APIs"}
