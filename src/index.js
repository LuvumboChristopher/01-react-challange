import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Contact from './Components/Contact.js';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
