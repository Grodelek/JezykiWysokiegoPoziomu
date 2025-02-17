import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Lab7 from './components/lab7/Lab7';
import Lab8 from './components/lab8/Lab8';
import Lab9 from './components/lab9/Lab9';
import AboutMe from './components/lab9/AboutMe';
import Interests from './components/lab9/Interests';
import FavoriteMovie from './components/lab9/FavoriteMovie';
import ContactForm from './components/lab9/ContactForm';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/lab7">Lab 7</Link></li>
            <li><Link to="/lab8">Lab 8</Link></li>
            <li><Link to="/lab9">Lab 9</Link></li>
          </ul>
        </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab8" element={<Lab8 />} />
          <Route path="/lab9" element={<Lab9 />} />
          <Route path="/lab9/about-me" element={<AboutMe />} />
          <Route path="/lab9/interests" element={<Interests />} />
          <Route path="/lab9/favorite-movie" element={<FavoriteMovie />} />
          <Route path="/lab9/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </Router>
  );
}

export default App;
