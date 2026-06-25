import NavbarHero from "../components/NavbarHero";

// import '../styles/globals.css';
import Features from '../components/features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <NavbarHero />
      <Features />
      <Footer />
    </main>
  );
}