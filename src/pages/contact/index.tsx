export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Whether you have questions about our
          logistics services, shipment tracking, or pricing, our team is ready
          to assist you.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>15 Logistics Avenue, Kano, Nigeria</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+234 800 123 4567</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@fastbox.com</p>
          </div>

          <div className="info-card">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Friday</p>
            <p>8:00 AM - 6:00 PM</p>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows={6}
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}