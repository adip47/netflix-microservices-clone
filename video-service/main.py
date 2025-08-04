from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "video-service root endpoint - Video upload and stream APIs"}
