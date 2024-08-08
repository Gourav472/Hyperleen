import './App.css';
import AddLabel from './components/AddLabel';
import Hero from './components/Hero';
import Segmentation from './components/Segmentation';

function App() {
  return (
    <div className=' overflow-hidden'>
      <Hero />
      <AddLabel />
      <Segmentation />
    </div>
  );
}

export default App;
