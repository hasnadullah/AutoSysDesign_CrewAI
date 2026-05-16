from pydantic import BaseModel

class DesignRequest(BaseModel):
    requirement: str

class DesignResponse(BaseModel):
    message: str
