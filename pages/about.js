import { useEffect, useState, useRef } from 'react';
import styles from '../styles/About.module.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const team = [
    { name: 'Daniel', role: 'API Integration Specialist', img: 'https://i.pinimg.com/474x/df/1f/14/df1f143c22b74306020a083a138a527b.jpg' },
    { name: 'Gabriel', role: 'Frontend Developer', img: 'https://i.pinimg.com/474x/df/1f/14/df1f143c22b74306020a083a138a527b.jpg' },
    { name: 'Karn', role: 'Content Curator', img: 'https://i.pinimg.com/474x/df/1f/14/df1f143c22b74306020a083a138a527b.jpg' },
    { name: 'Nicholas', role: 'State Management Engineer', img: 'https://i.pinimg.com/474x/df/1f/14/df1f143c22b74306020a083a138a527b.jpg' },
  ];

  const testimonials = [
    { name: 'Sophia Grey', comment: "The chatbot helped me understand my course options in minutes!" },
    { name: 'Liam Oswald', comment: "Fast, easy, and super helpful for deadlines and requirements." },
    { name: 'Olivia Giroud', comment: "Way better than emailing — I got answers instantly." },
  ];

  const faqList = [
    {
      question: "Clear Information",
      answer: "We provide accurate, easy to understand details about Humber's Computer Programming program, from admission requirements to course offerings, so you can make informed decisions."
    },
    {
      question: "Student Support",
      answer: "Whether you're a new applicant or current student, the chatbot is here to guide you through resources, deadlines, and everything you need to thrive in the program."
    },
    {
      question: "Quick Access",
      answer: "Available 24/7, the chatbot makes it easy to get quick answers to your most important questions—no waiting required!"
    },
    {
      question: "Built by Students",
      answer: "Our AI chatbot was created by current Humber students, ensuring it reflects real needs and real experiences."
    },
    {
      question: "Constantly Improving",
      answer: "The chatbot is regularly updated based on student feedback and changes in the curriculum."
    },
    {
      question: "Simple & Effective",
      answer: "We prioritize a clean, no-fluff interface so you get the information you need without distractions."
    }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.page}>
      {/* Section: FAQs */}
      <section className={styles.commitmentSection}>
        <h2 data-aos="fade-up">Humber Chatbot FAQs</h2>
        <div className={styles.faqContainer}>
          {faqList.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Section: Humber AI Bot Info */}
      <section className={styles.botInfoSection}>
        <h2 className={styles.sectionTitle}>Humber AI Bot Info</h2>
        <p className={styles.sectionIntro}>
          Learn what the Humber AI Bot can and can't help you with. It’s designed to assist students by providing quick and reliable information.
        </p>
        <div className={styles.botCardGrid}>
          <div className={styles.botCard} >
            <h3>What it can do</h3>
            <p>Answer questions related to Humber College such as program info, application deadlines, student services, and campus directions.</p>
          </div>
          <div className={styles.botCard}>
            <h3>What it can't do</h3>
            <p>It won’t answer unrelated questions like personal advice, internet trivia, or anything beyond Humber’s academic ecosystem.</p>
          </div>
          <div className={styles.botCard}>
            <h3>Ideal usage</h3>
            <p>Best for fast facts, navigating campus services, or getting help with commonly asked questions about student life.</p>
          </div>
        </div>
      </section>

      {/* Section: Humber AI Bot Usage */}
      <div className={styles.botUsageSection}>
        <h3>How to Use the Chatbot</h3>
        <ul className={styles.botUsageList}>
          <li><strong>Open the Chat:</strong> Go to the homepage of the website to find the AI Chatbot</li>
          <li><strong>Type a Question:</strong> Ask something like <em>"What’s the deadline for Fall 2025 applications?"</em></li>
          <li><strong>Use FAQ Questions:</strong> Clicking a question on our FAQ list below the Chatbot will autimatically ask popular questions</li>
          <li><strong>Get Instant Help:</strong> The bot will respond with official answers based on Humber’s data.</li>
          <li><strong>Refine If Needed:</strong> If the response doesn’t help, try rephrasing or being more specific.</li>
        </ul>
      </div>

      {/* Section: Meet the Team */}
      <section className={styles.teamSection}>
        <h2 data-aos="fade-right">Meet the Team</h2>
        <Slider {...carouselSettings} className={styles.slider}>
          {team.map((member, index) => (
            <div key={index}>
              <div className={styles.teamCardWrapper}>
                <div className={styles.teamCard}>
                  <img src={member.img} alt={member.name} />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <div className={styles.sectionDivider}></div>

      {/* Section: Testimonials */}
      <section className={styles.testimonialSection}>
        <h2 data-aos="fade-left">What Students Say</h2>
        <Slider {...carouselSettings} className={styles.slider}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.testimonial}>
              <p>"{t.comment}"</p>
              <h5>- {t.name}</h5>
            </div>
          ))}
        </Slider>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Connect With Humber</p>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/humberpoly/" target="_blank" rel="umber instagram" aria-label="Instagram">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.linkedin.com/school/humber-college/" target="_blank" rel="Humber linkedin" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="https://twitter.com/HumberPoly" target="_blank" rel="Humber twitter" aria-label="X (formerly Twitter)">
            <FaXTwitter size={28} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggle = () => {
    setOpen(!open);
    setHeight(!open ? `${contentRef.current.scrollHeight}px` : '0px');
  };

  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ''}`}>
      <div className={styles.faqQuestion} onClick={toggle}>
        {question}
      </div>
      <div
        ref={contentRef}
        className={styles.faqAnswer}
        style={{ height: height }}
      >
        <div className={styles.faqContent}>{answer}</div>
      </div>
    </div>
  );
}