import Hero from './components/Hero';
import AddLabel from './components/AddLabel';
import Segmentation from './components/Segmentation';
import Platforms from './components/Platforms';
import Faq from './components/Faq'
import Hyperleen from './components/Hyperleen';
import Footer from './components/Footer';
import ScrollToTop from './common/ScrollToTop'
import PreLoader from './common/PreLoader'
import './App.css';
function App() {
  return (
    <div className=' overflow-hidden max-w-[1920px] mx-auto'>
      <Hero />
      <AddLabel />
      <Segmentation />
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
