import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useButton } from '@react-aria/button';
import './App.css';
import logo from './logo.svg';

function Home() {
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleClick = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data');
    }
  };

  let ref = React.useRef();
  let { buttonProps } = useButton({
    onPress: handleClick
  }, ref);

  return (
    <main className="App-main">
      <button {...buttonProps} ref={ref} className="App-button">
        Click Me
      </button>
      {['section1', 'section2', 'section3', 'section4'].map((section, index) => (
        <div key={section} className={`App-section App-section-${index + 1}`}>
          <div
            className={`App-section-label ${expandedSections[section] ? 'expanded' : 'collapsed'}`}
            onClick={() => toggleSection(section)}
          >
            {section === 'section1' ? 'Agreement Suite' : section === 'section2' ? 'Risk Suite' : section === 'section3' ? 'Data Suite' : 'Workflow Suite'}
          </div>
          {expandedSections[section] && (
            <div className="App-cards">
              {[...Array(10)].map((_, cardIndex) => (
                <div key={cardIndex} className="App-card">
                  <img src={`https://placehold.co/150?text=Card+${cardIndex + 1}`} alt={`Card ${cardIndex + 1}`} />
                  <p>Card {cardIndex + 1}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

function Page1() {
  return (
    <main className="App-main">
      <h1>Page 1</h1>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="App-menu-button" onClick={toggleMenu}>
            ☰
          </button>
          <input type="text" className="App-search" placeholder="Search..." />
        </header>
        {menuOpen && (
          <nav className="App-nav-overlay">
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/page1" onClick={toggleMenu}>Page 1</Link></li>
            </ul>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
        <footer className="App-footer">
          <p>&copy; 2025 My React App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
