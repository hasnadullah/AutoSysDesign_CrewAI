from fastapi import FastAPI
from src.backend.routes import design_route

app = FastAPI(
    title="AutoSysDesign Crew API",
    description="FastAPI backend for AI Crew system design generator",
    version="1.0.0"
)

# Include the design routes
app.include_router(design_route.router)

@app.get("/")
def root_endpoint():
    return {"message": "Welcome to AutoSysDesign Crew API. Go to /docs for Swagger UI."}
