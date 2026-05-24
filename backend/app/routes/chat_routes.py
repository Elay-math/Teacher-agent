from fastapi import APIRouter
from app.schemas.chat_schema import ChatRequest
from app.agents.tutor_agent import TutorAgent
router = APIRouter()
agent = TutorAgent()
@router.post("/chat")
def chat(request: ChatRequest):
    response = agent.process_message(request.message)
    return {"response": response}