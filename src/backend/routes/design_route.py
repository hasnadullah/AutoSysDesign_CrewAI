from fastapi import APIRouter
from fastapi.responses import PlainTextResponse
from src.backend.schemas.design_schema import DesignRequest
from src.backend.controllers.design_controller import process_design_request

router = APIRouter(prefix="/api/design", tags=["System Design"])

@router.post("/", response_class=PlainTextResponse)
def create_system_design(request: DesignRequest):
    """
    Takes a software requirement and uses the AI Crew to generate a system design.
    """
    result = process_design_request(request)
    return result["message"]
