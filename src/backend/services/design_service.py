from src.ai_crew.crew import run_crew

def generate_design_service(requirement: str) -> dict:
    try:
        # Run the AI crew
        result = run_crew(requirement)
        return {"message": str(result)}
    except Exception as e:
        return {"error": str(e)}
