import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SocialFollow from './SocialFollow'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

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
          <Link className="logoko2" href="/">Home</Link>
          &nbsp;&nbsp;
          <Link className="logoko2" href="/about">About</Link>
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
      <HomePage/>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
      <AboutPage/>
      </main>
      
    </>
  );
}

export default App;
