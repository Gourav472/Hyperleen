import './App.css';
import Hero from './components/Hero';
import AddLabel from './components/AddLabel';
import Segmentation from './components/Segmentation';
import Platforms from './components/Platforms';
import Faq from './components/Faq'
import Hyperleen from './components/Hyperleen';
import Footer from './components/Footer';
import ScrollToTop from './common/ScrollToTop'
import PreLoader from './common/PreLoader'
function App() {
  return (
    <div className=' overflow-hidden'>
      <Hero />
      <AddLabel />
      <Segmentation />F
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
