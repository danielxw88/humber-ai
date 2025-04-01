import { useState } from 'react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h1>About the Humber Computer Programing AI Chatbot</h1>
      <p>This chatbot helps students and prospects learn about Humber's Computer Programming program.</p>
      
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Hide Details' : 'Show More'}
      </button>
      
      {showMore && (
        <div>
          <p>
            This chatbot is powered by OpenAI's GPT-3.5 model and is tailored to only respond to Humber College Computer Programming-related questions.
          </p>
        </div>
      )}
    </div>
  );
}

  