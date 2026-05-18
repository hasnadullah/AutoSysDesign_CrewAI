# 🤖 AutoSysDesign

AutoSysDesign is a high-fidelity, professional AI system design platform. It leverages a team of autonomous AI agents (CrewAI) through a beautiful, glassmorphism-inspired interface to transform vague software requirements into comprehensive, production-ready system architectures.

---

## ✨ Key Features

- **💎 Elite UI/UX:** High-fidelity glassmorphism interface inspired by "Cortex".
- **🤝 Multi-Agent Orchestration:** Powered by **CrewAI**, utilizing a pipeline of specialized agents:
  - **Analyst:** Breaks down requirements and identifies core components.
  - **Engineer:** Designs specific technical architectures and data models.
  - **Reviewer:** Ensures security, scalability, and adherence to best practices.
- **⚡ Real-time Feedback:** Live chat experience with pulsating loading states and smooth transitions.
- **🔧 Modular Architecture:** Professional SaaS-level folder structure with a clear separation of concerns between AI, Backend, and Frontend.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, Vite, Material UI (MUI), Axios |
| **Backend** | FastAPI, Uvicorn, Pydantic |
| **AI Engine** | CrewAI, Google Gemini 2.5 Flash-Lite |
| **Environment** | Python 3.11+, Node.js 18+ |

---

## 🚀 Quick Start

### 1. Prerequisites
- [Google Gemini API Key](https://aistudio.google.com/)
- Python 3.11+ & Node.js 18+

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
SERPER_API_KEY=your_serper_api_key_here
```

### 3. Backend Setup
```powershell
# Create Virtual Environment
python -m venv .venv
.\.venv\Scripts\activate

# Install Dependencies
pip install -r requirements.txt

# Start FastAPI Server
python -m uvicorn src.backend.main:app --reload
```
*API accessible at: `http://127.0.0.1:8000/docs`*

### 4. Frontend Setup
```powershell
cd frontend
npm install
npm run dev
```
*Application accessible at: `http://localhost:5173`*

---

## 🏗️ Project Architecture

```text
ai_crew_project/
├── src/
│   ├── ai_crew/           # core AI logic
│   │   ├── config/        # YAML configurations for agents/tasks
│   │   ├── crew.py        # CrewAI setup (Analyst, Engineer, Reviewer)
│   │   └── validator.py   # Output validation logic
│   └── backend/           # FastAPI application
│       ├── controllers/   # Request processing
│       ├── routes/        # API endpoints
│       ├── services/      # Business logic / AI bridge
│       └── main.py        # App entry & CORS config
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Glassmorphism UI components (ChatInput, Sidebar)
│   │   ├── pages/         # ChatPage.jsx (Main Interface)
│   │   └── services/      # Axios API service
├── README.md              # Project documentation
└── requirements.txt       # Python dependencies
```

---

## 🤖 AI Workflow (The "Crew" Process)

1. **User Input:** The user provides a design requirement via the React interface.
2. **Analysis:** The **Requirement Analyst** agent parses the input for features and constraints.
3. **Engineering:** The **System Engineer** agent proposes data models and architecture diagrams.
4. **Validation:** The **Technical Reviewer** agent audits the design for potential flaws.
5. **Output:** The finalized, multi-perspective design is streamed back to the user.

---

## 📄 License
Internal Development - All Rights Reserved.
