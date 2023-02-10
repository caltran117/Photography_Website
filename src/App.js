import logo from './logo.svg';
import Header from './components/Header'
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
