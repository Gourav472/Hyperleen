import './App.css';
import PreLoader from './common/PreLoader';
import ScrollToTop from './common/ScrollToTop';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hyperleen from './components/Hyperleen';
import Platforms from './components/Platforms';

function App() {
  return (
    <div>
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
