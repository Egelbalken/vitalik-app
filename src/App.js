import { BrowserRouter } from 'react-router-dom';
import Button from './components/Button/Button';
import FeatureCard from './components/FeatureCard/FeatureCard';
import btnStyle from './components/Button/button.module.css';
import Locker from './components/Locker/Locker';
import Rodmap from './components/Roadmap/Rodmap';
import Tokenomics from './components/Tokenomics/Tokenomics';
import HowToBy from './components/HowToBuy/HowToBuy';
import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashLink as Link } from 'react-router-hash-link';
// Fixing video and header!!

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroSection
        message="In a smart decentralized world"
        title="Community empowerd token"
      >
        <section id="home">
          <Link to="#home">
            <Button className={btnStyle.btnMore}>More About VTLK</Button>
          </Link>
        </section>
      </HeroSection>
      <section id="feature">
        <FeatureCard />
        <Locker />
      </section>
      <section id="roadmap">
        <Rodmap />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="howtobuy">
        <HowToBy />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
