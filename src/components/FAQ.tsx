import FAQItem from "./FAQItem";
import "../styles/faq.css";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide modern web development solutions including responsive websites and web applications.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach us through the Contact page or any of our official social media platforms.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. Every page is designed to work seamlessly across desktop, tablet, and mobile devices.",
  },
  {
    question: "Can I request a custom project?",
    answer:
      "Absolutely. We develop custom solutions based on your specific requirements.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project duration depends on complexity, but timelines are discussed before development begins.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. We offer post-delivery support and maintenance where applicable.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to some of the most common questions about our services.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}