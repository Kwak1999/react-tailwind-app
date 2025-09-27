import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Support from './components/Support'
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home />
            <About />
            <Support />
            <Feature />
            <Feedback />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;