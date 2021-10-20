import './App.css';
import Community from './components/Community';
import Location from './components/Location';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import Recipes from './components/Recipes';
import { ParallaxProvider } from 'react-scroll-parallax';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';


function App() {
  return (
    
    <div className="App">

      <Navigation />
      
      <Community />
      
      <Location />
      
      <ParallaxProvider>
        <Menu />
      </ParallaxProvider>
      
      <Recipes />

      <Collaborate />

      <Footer />
      
    </div>
  );
}

export default App;
