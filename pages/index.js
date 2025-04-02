import Head from "next/head"
import Chatbox from '../components/chatbox';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
 <>
 <Head>
    <title>Humber AI Chatbot</title>
    <meta
      name="description"
      content="Ask questions about the Computer Programming diploma at Humber College"
      />
    </Head>
    
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Humber Programming <br /> AI Chatbot
          </h1>

          <p className={styles.description}>
            Get instant answers about admissions, courses, tuition, and more!
          </p>

          <div className={styles.chatbox}>
            <Chatbox />
          </div>

          <div className={styles.faq}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqButtons}>
              <button>What are the admission requirements?</button>
              <button>What courses are offered</button>
              <button>How much is the tuition</button>
            </div>
          </div>
          </main>

          <Footer />
    </div>
    </>
  );
}