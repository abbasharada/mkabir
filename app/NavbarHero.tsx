import "./NavbarHero.css";

export default function NavbarHero() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Fast<span>Box</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Tracking</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="quote-btn">Get a Quote</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Trusted Logistics Partner</p>

          <h1>
            Fast, Reliable Logistics
            <br />
            Across Every Mile
          </h1>

          <p className="hero-text">
            Delivering packages safely and on time for businesses and
            individuals. FastBox makes shipping simple, secure, and efficient.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Track Package</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            alt="Delivery Truck"
          />
        </div>
      </section>
    </>
  );
}
