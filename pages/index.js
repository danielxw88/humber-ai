import { useState } from "react";
import Head from "next/head";
import Chatbox from "../components/chatbox"; 
import styles from "../styles/Home.module.css";

export default function Home() {
  const [faqQuestion, setFaqQuestion] = useState("");

  return (
    <>
      <Head>
        <title>Humber AI Chatbot</title>
        <meta
          name="description"
          content="Ask questions about the Computer Programming diploma at Humber College"
        />
      </Head>

      <div className={styles.darkPage}>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Humber Programming <br /> AI Chatbot
            </h1>

            <p className={styles.description}>
              Get instant answers about admissions, courses, tuition, and more!
            </p>

            <div className={styles.chatbox}>
              <Chatbox presetQuestion={faqQuestion} />
            </div>

            <div className={styles.faq}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqButtons}>
                <button onClick={() => setFaqQuestion("Can you give me an overview of the Computer Programming program?")}>
                  Can you give me an overview of the Computer Programming program?
                </button>
                <button onClick={() => setFaqQuestion("What are the admission requirements?")}>
                  What are the admission requirements?
                </button>
                <button onClick={() => setFaqQuestion("What courses are offered?")}>
                  What courses are offered?
                </button>
                <button onClick={() => setFaqQuestion("How much is the tuition?")}>
                  How much is the tuition?
                </button>
                <button onClick={() => setFaqQuestion("How do I apply to the program?")}>
                  How do I apply to the program?
                </button>
                <button onClick={() => setFaqQuestion("What equipment or devices do I need for the program?")}>
                  What equipment or devices do I need for the program?
                </button>
                <button onClick={() => setFaqQuestion("How can I contact someone for help?")}>
                  How can I contact someone for help?
                </button>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
