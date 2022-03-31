import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SocialFollow from './SocialFollow'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import AnimatedText from 'react-animated-text-content';

function App() {
  return (
    <div className="App">
      <nav className="logoko">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-middle"
            />
            OWSHII&nbsp;&nbsp;✌😉&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="logoko2" to="/">Home</Link>
          &nbsp;&nbsp;
          <Link className="logoko3" to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SocialFollow/>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
      <div class="About-Height">
    <h1 class="wew">
      <AnimatedText
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="diagonal"
        interval={0.2}
        duration={2.5}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        I ❣ REACT JS 🍻
      </AnimatedText>
    </h1>
    <h1 class="wew">
      <AnimatedText
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="diagonal"
        interval={0.2}
        duration={2.5}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        THIS HOME PAGE
      </AnimatedText>
    </h1>
  </div>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
      <div class="About-Height">
    
    <h1 class="wew">
      <AnimatedText
        type="chars" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="diagonal"
        interval={0.2}
        duration={2.5}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        This is About Page 🍻
      </AnimatedText>
    </h1>
  </div>
      </main>
      
    </>
  );
}

export default App;
