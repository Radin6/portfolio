import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
    </>
  );
}

export default App;
