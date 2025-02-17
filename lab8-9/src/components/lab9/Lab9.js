import React from 'react';
import { Link } from 'react-router-dom';

function Lab9() {
  return (
    <div>
      <h2>Lab 9</h2>
      <ul className="lab9-list">
        <li><Link to="/lab9/about-me">O mnie</Link></li>
        <li><Link to="/lab9/interests">Moje zainteresowania</Link></li>
        <li><Link to="/lab9/movie">Ulubiony film</Link></li>
        <li><Link to="/lab9/contact">Kontakt</Link></li>
      </ul>
    </div>
  );
}

export default Lab9;
