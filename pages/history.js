import { useState } from 'react';

export default function History() {
  // Dummy data simulating chat history
  const dummyHistory = [
    {
      question: "What is the tuition for the Computer Programming program?",
      answer: "The tuition is $xxx per year."
    },
    {
      question: "How long is the Computer Programming diploma?",
      answer: "The program is typically completed in 2 years (4 semesters)."
    },
    {
      question: "What courses will I take in the first semester?",
      answer: "Courses usually include Programming Fundamentals, Web Development, Database Fundamentals, and others."
    }
  ];

  const [showAnswers, setShowAnswers] = useState(
    dummyHistory.map(() => false) // initially, all answers are hidden
  );

  const toggleAnswer = (index) => {
    const updated = [...showAnswers];
    updated[index] = !updated[index];
    setShowAnswers(updated);
  };

  return (
    <div>
      <h1>Chat History</h1>

      {/* Search Box */}
      <input 
        type="text" 
        placeholder="Search history" 
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
        disabled
      />

      <ul>
        {dummyHistory.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.question}</strong><br />
            <button onClick={() => toggleAnswer(index)}>
              {showAnswers[index] ? 'Hide Answer' : 'Show Answer'}
            </button>
            {showAnswers[index] && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
