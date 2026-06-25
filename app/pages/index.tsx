import NavbarHero from "../components/NavbarHero";

export default function Home() {
  return <NavbarHero />;
import '../styles/globals.css';
import Features from '@/app/components/features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Features />

      <Footer />
    </main>
  );
}