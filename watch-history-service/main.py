from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "watch-history-service root endpoint - User watch history APIs"}
