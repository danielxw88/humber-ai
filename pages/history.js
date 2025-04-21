import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/History.module.css';

export default function History() {
  // Dummy data simulating chat history
  const dummyHistory = [
    {
      id: 1,
      question: "What is the tuition for the Computer Programming program?",
      answer: "As of the 2024/2025 school year, the fee for 2 semesters was $3,985.24 for domestic students and $17,934.10 for international students. ",
      date: "Apr 1, 2025"
    },
    {
      id: 2,
      question: "How long is the Computer Programming diploma?",
      answer: "The program is typically completed in 2 years (4 semesters). Additionally there is also a Computer Programming & Analysis course which lasts 3 years (6 semesters) and you receive an advanced diploma.",
      date: "Mar 28, 2025"
    },
    {
      id: 3,
      question: "What courses will I take in the first semester?",
      answer: "Courses usually include Programming Fundamentals, Web Development, Database Fundamentals, and others.",
      date: "Mar 25, 2025"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const [showAnswers, setShowAnswers] = useState(
    dummyHistory.map(() => false) // on page load, answers are hidden
  );

  const toggleAnswer = (index) => {
    const updated = [...showAnswers];
    updated[index] = !updated[index];
    setShowAnswers(updated);
  };

  return (
    // Apply history page-specific dark theme layout styling
    <div className={styles.historyPage}>

      <Head>
        <title>Chat History | Humber College AI Assistant</title>
      </Head>
      
      <div className={styles.historyContainer}>
        {/* Your existing component content */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Chat History</h1>
        </header>

        <h2 className={styles.sectionTitle}>Your Previous Conversations</h2>
        
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            className={styles.searchBox} 
            placeholder="Search your chat history..." 
            disabled
          />
          <button className={styles.searchButton} disabled>Search</button>
        </div>
        
        <div className={styles.filterSection}>
      <button 
        className={`${styles.filterButton} ${activeFilter === 'all' ? styles.activeFilter : ''}`}
        onClick={() => setActiveFilter('all')}
      >All Chats</button>
      <button 
          className={`${styles.filterButton} ${activeFilter === 'month' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('month')}
      >This Month</button>
      <button 
        className={`${styles.filterButton} ${activeFilter === 'program' ? styles.activeFilter : ''}`}
        onClick={() => setActiveFilter('program')}
      >Program Inquiries</button>
      <button 
          className={`${styles.filterButton} ${activeFilter === 'admission' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('admission')}
      >Admission Questions</button>
</div>
        
        {dummyHistory.length > 0 ? (
          <div className={styles.historyList}>
            {dummyHistory.map((item, index) => (
              <div key={item.id} className={`${styles.historyItem} ${showAnswers[index] ? styles.expanded : ''}`}>
                <div className={styles.historyContent}>
                  <h3 className={styles.historyTitle}>{item.question}</h3>
                  <div className={styles.historyDate}>{item.date}</div>
                  {showAnswers[index] && (
                    <p className={`${styles.historyAnswer} ${showAnswers[index] ? styles.visible : ''}`}>
                    {item.answer}
                    </p>
                  )}
                </div>
                <div className={styles.actionButtons}>
                  <button 
                    className={styles.actionButton} 
                    onClick={() => toggleAnswer(index)}
                  >
                    {showAnswers[index] ? 'Hide Answer' : 'Show Answer'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No chat history yet</h3>
            <p>Your conversations with the Humber College AI Assistant will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}