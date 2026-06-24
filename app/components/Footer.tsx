import "./styles/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Team Web Project</h2>

          <p className="footer-text">
            Built by Musa Intern • Abdullahi Intern • Naima Intern
          </p>

          <p className="footer-copy">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="footer-icons">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </div>
    </footer>
  );
}