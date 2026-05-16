import json

REQUIRED_KEYS = {
    "assumptions",
    "risks",
    "implementation_steps",
    "test_plan",
    "open_questions"
}

def validate_output(raw_output: str):
    try:
        # Strip codeblock wrappers if present
        raw_output = raw_output.strip()
        if raw_output.startswith("```json"):
            raw_output = raw_output[7:]
        if raw_output.startswith("```"):
            raw_output = raw_output[3:]
        if raw_output.endswith("```"):
            raw_output = raw_output[:-3]
        
        data = json.loads(raw_output)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON: {e}")

    if not isinstance(data, dict):
        raise ValueError("Output must be a JSON object")

    missing = REQUIRED_KEYS - set(data.keys())
    if missing:
        raise ValueError(f"Missing keys: {missing}")

    return data
