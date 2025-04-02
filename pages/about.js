import styles from '../styles/About.module.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.commitmentSection}>
        <h2>About the Humber Computer Programing AI Chatbot</h2>
        <div className={styles.commitmentContainer}>
          <div className={styles.commitmentItem}>
            <h3>Clear Information</h3>
            <p>
              We provide accurate, easy to understand details about Humber's Computer Programming program, from admission requirements to course offerings, so you can make informed decisions.
            </p>
          </div>
          <div className={styles.commitmentItem}>
            <h3>Student Support</h3>
            <p>
              Whether you're a new applicant or current student, the chatbot is here to guide you through resources, deadlines, and everything you need to thrive at Humber.
            </p>
          </div>
          <div className={styles.commitmentItem}>
            <h3>Career-Focused Insights</h3>
            <p>
              Learn how the program prepares you for real-world jobs in software development, web programming, mobile app creation, and beyond all, with co-op and industry connections.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.differenceSection}>
        <h2>What Makes This Chatbot Different</h2>
        <div className={styles.differenceContainer}>
          <div className={styles.differenceItem}>
            <h3>Guidance on Demand</h3>
            <p>
              This chatbot is powered by OpenAI's GPT-3.5 model and is tailored to only respond to Humber College Computer Programming-related questions.
            </p>
          </div>
          <div className={styles.differenceItem}>
            <h3>Explore Your Future</h3>
            <p>
              Discover where Humber’s Computer Programming diploma can take you. Learn about career pathways, graduate certificates, and university transfer options.
            </p>
          </div>
          <div className={styles.differenceItem}>
            <h3>Stay On Track</h3>
            <p>
              Get reminders and tips about application deadlines, registration periods, and campus resources, so you’re always one step ahead.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.socialSection}>
        <h2>Connect with Humber</h2>
        <p>Stay updated on the latest news, events, and student success stories from the Computer Programming program.</p>
        <div className={styles.socialIcons}>
          <a href="https://twitter.com/HumberPoly" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
            <FaXTwitter size={28} />
          </a>

          <a href="https://www.instagram.com/humberpoly/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.linkedin.com/school/humber-college/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}