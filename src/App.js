import Hero from './components/Hero';
import AddLabel from './components/AddLabel';
import Segmentation from './components/Segmentation';
import Verification from './components/Verification'
import OurTeam from './components/OurTeam'
import SystemWorks from './components/SystemWorks'
import HightQuality from './components/HighQuality'
import Platforms from './components/Platforms';
import Faq from './components/Faq'
import Hyperleen from './components/Hyperleen';
import Footer from './components/Footer';
import ScrollToTop from './common/ScrollToTop'
import PreLoader from './common/PreLoader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      easing: "ease-in-out",
      disable: 'mobile',
    });
  }, []);
  return (
    <div className='overflow-hidden max-w-[1920px] mx-auto'>
      <Hero />
      <AddLabel />
      <Segmentation />
      <Verification />
      <OurTeam />
      <SystemWorks />
      <HightQuality />
      <Platforms />
      <Faq />
      <Hyperleen />
      <Footer />
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}
export default App;
