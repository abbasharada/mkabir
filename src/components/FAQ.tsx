import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking number provided after booking. Enter the tracking ID on the Track Shipment page to view its current status.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on the destination and shipping option selected. Standard deliveries typically take 2–5 business days, while express deliveries are faster.",
  },
  {
    question: "What items are prohibited from shipping?",
    answer:
      "Hazardous materials, illegal goods, explosives, flammable substances, and other restricted items cannot be shipped through FastBox.",
  },
  {
    question: "Can I change my delivery address after shipping?",
    answer:
      "Yes, address changes may be possible before the shipment reaches the final delivery stage. Contact our support team as soon as possible.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes. FastBox provides international shipping services to selected countries. Delivery times and costs vary depending on the destination.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team through the Contact page, email, or phone during business hours.",
  },
];

export default function FAQ() {
  const [search, setSearch] = useState("");

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>

        <p>
          Find answers to common questions about FastBox logistics and
          delivery services.
        </p>

        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="faq-search"
        />
      </div>

      <div className="faq-list">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))
        ) : (
          <p className="no-results">
            No matching questions found.
          </p>
        )}
      </div>

      <div className="faq-contact">
        <h2>Need help with your shipment?</h2>

        <p>
          Our logistics specialists are available to help with parcel
          tracking, delivery schedules, shipping costs, and any other
          questions you may have.
        </p>

        <a href="/contact" className="contact-btn">
          Contact FastBox Support
        </a>
      </div>
    </section>
  );
}