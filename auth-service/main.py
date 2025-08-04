from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "auth-service root endpoint - JWT Authentication and login APIs"}
