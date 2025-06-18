from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from langchain_community.llms import Ollama
from langchain_core.runnables import RunnableLambda
from langgraph.graph import StateGraph, END
from typing import TypedDict, Optional

# 🧠 Define state schema
class OutlineState(TypedDict):
    subject: str
    level: str
    units: int
    outline: Optional[str]
    summary: Optional[str]

# 💬 Local Ollama model
llm = Ollama(model="llama3.2")

# 🧩 Step 1: Generate subject outline
@csrf_exempt
def outlineGenerator(state: OutlineState) -> OutlineState:
    prompt = f"""
    You are a professional course designer.

    Generate a detailed subject outline for: "{state['subject']}".
    Level: {state['level']}
    Number of units: {state['units']}

    Instructions:
    - Each unit should have a title and 3-5 bullet-point subtopics.
    - Use markdown-style formatting.
    - Be concise, informative, and clearly structured.
    """
    result = llm.invoke(prompt)
    return {**state, "outline": result}

# 🧩 Step 2: Summarize the outline
def summarize_outline(state: OutlineState) -> OutlineState:
    prompt = f"""
    Please provide a short summary of the following subject outline:\n\n{state['outline']}
    """
    result = llm.invoke(prompt)
    return {**state, "summary": result}

# 🔗 Build LangGraph
builder = StateGraph(OutlineState)
builder.add_node("generate_outline", RunnableLambda(outlineGenerator))
builder.add_node("summarize_outline", RunnableLambda(summarize_outline))

builder.set_entry_point("generate_outline")
builder.add_edge("generate_outline", "summarize_outline")
builder.add_edge("summarize_outline", END)

# ✅ Compile it
graph_app = builder.compile()

# 🌐 Django View
@csrf_exempt
@csrf_exempt
def outline_generator_view(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            subject = body.get("subject")
            level = body.get("level")
            units = body.get("units")

            if not subject or not level or units is None:
                return JsonResponse({"error": "Please provide subject, level, and units."}, status=400)

            try:
                units = int(units)
            except ValueError:
                return JsonResponse({"error": "Units must be an integer."}, status=400)

            # ✅ This is the dictionary passed to LangGraph
            init_state: OutlineState = {
                "subject": subject,
                "level": level,
                "units": units,
                "outline": None,
                "summary": None
            }

            # ✅ Pass correct input structure
            final_state = graph_app.invoke(init_state)

            return JsonResponse({
                "outline": final_state["outline"],
                "summary": final_state["summary"]
            }, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid HTTP method. Use POST."}, status=405)

