import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}