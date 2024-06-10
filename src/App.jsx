import './App.css';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CardsList />
      <ProgressBar />
      <Footer />
    </>
  );
}

export default App;
