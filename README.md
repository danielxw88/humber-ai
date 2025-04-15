# Humber AI Chatbot

An AI-powered chatbot built with Next.js and OpenAI's GPT-3.5 API to help prospective and current students of Humber College's **Computer Programming** diploma quickly access important program information.

---

## Features

- Ask questions about admissions, courses, tuition, devices, and more
- Get intelligent, relevant answers using GPT-3.5 (OpenAI)
- Quick-access FAQ buttons
- Chat history with collapsible answers
- About page with team intro, student testimonials, and chatbot purpose
- Responsive design and animated transitions

---

## Project Structure

/components ├── chatbox.js → Main chat interface with GPT integration ├── footer.js → Footer shown on every page └── navbar.js → Navigation bar linking to all routes

/pages ├── index.js → Main chatbot interface with FAQ buttons ├── history.js → Displays sample chat history with toggleable answers ├── about.js → Describes chatbot purpose, team members, and testimonials └── api/chat.js → Backend API route that sends chat messages to OpenAI

/styles ├── Home.module.css ├── History.module.css ├── About.module.css └── globals.css → Global styling for layout & resets


---

## State Management

- **React `useState`**: used for input value, chat history, FAQ selection, and answer toggles.
- **`presetQuestion` prop**: allows FAQ button to auto-fill the chat input.
- **`useEffect`**: updates the input field if a preset question is selected.

---

## AI Integration

Located in: `/pages/api/chat.js`

- Uses `axios` to call OpenAI's `gpt-3.5-turbo` model
- A system message restricts the assistant to only respond with Humber-specific info
- Handles timeouts and errors gracefully

---

## How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/humber-ai.git
cd humber-ai

2. Install dependencies
bash
Copy
Edit
npm install
3. Add your OpenAI API key
Create a .env.local file:

bash
Copy
Edit
OPENAI_API_KEY=your-openai-key-here
4. Start the development server
bash
Copy
Edit
npm run dev
Then go to http://localhost:3000 to use the chatbot.

Tech Stack
Next.js (React framework)
React Hooks for component state
Axios for GPT API integration
OpenAI GPT-3.5 model
AOS (Animate on Scroll)
React Slick Carousel for about/testimonial sections
Team Members
Daniel – API Integration Specialist
Gabriel – Frontend Developer
Karn – Content Curator
Nicholas – State Management Engineer

