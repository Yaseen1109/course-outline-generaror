import streamlit as st
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
def generate_outline(state: OutlineState) -> OutlineState:
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
builder.add_node("generate_outline", RunnableLambda(generate_outline))
builder.add_node("summarize_outline", RunnableLambda(summarize_outline))

builder.set_entry_point("generate_outline")
builder.add_edge("generate_outline", "summarize_outline")
builder.add_edge("summarize_outline", END)

# ✅ Compile it
graph_app = builder.compile()

# ------------------ STREAMLIT UI -------------------

st.set_page_config(page_title="Subject Outline Generator", layout="centered")
st.title("📚 AI Subject Outline Generator (LangGraph + Ollama)")

# User Inputs
subject = st.text_input("Enter the subject (e.g., Data Structures)")
level = st.selectbox("Select the level", ["Beginner", "Intermediate", "Advanced"])
units = st.slider("Number of Units", 3, 10, 5)

if st.button("🚀 Generate Outline"):
    if not subject.strip():
        st.warning("Please enter a subject name.")
    else:
        with st.spinner("Running local LLaMA 3 via LangGraph..."):
            init_state: OutlineState = {
                "subject": subject,
                "level": level,
                "units": units,
                "outline": None,
                "summary": None
            }
            final_state = graph_app.invoke(init_state)

        st.subheader("🧾 Generated Outline")
        st.markdown(final_state["outline"])

        st.subheader("🧠 Summary")
        st.markdown(final_state["summary"])
