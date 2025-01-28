import React, { useState } from 'react';
import { useButton } from '@react-aria/button';
import { useLink } from '@react-aria/link';
import './App.css';
import logo from './logo.svg';

function App() {
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

  let ref = React.useRef();
  let { buttonProps } = useButton({
    onPress: () => alert('Hello World!')
  }, ref);

  let homeRef = React.useRef();
  let aboutRef = React.useRef();
  let contactRef = React.useRef();
  let { linkProps: homeLinkProps } = useLink({ href: "#" }, homeRef);
  let { linkProps: aboutLinkProps } = useLink({ href: "#" }, aboutRef);
  let { linkProps: contactLinkProps } = useLink({ href: "#" }, contactRef);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <ul>
            <li><a {...homeLinkProps} ref={homeRef}>Home</a></li>
            <li><a {...aboutLinkProps} ref={aboutRef}>About</a></li>
            <li><a {...contactLinkProps} ref={contactRef}>Contact</a></li>
          </ul>
        </nav>
        <input type="text" className="App-search" placeholder="Search..." />
      </header>
      <img src="https://placehold.co/1200x150" alt="Header" className="App-header-image" />
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
              Section {index + 1}
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
      <footer className="App-footer">
        <p>&copy; 2025 My React App</p>
      </footer>
    </div>
  );
}

export default App;
