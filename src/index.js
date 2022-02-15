import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Contact from './Components/Contact.js';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact name='Goku' email='goku@gmail.com' phone='075212354' />
      <Contact name='Vegeta' email='vegeta@gmail.com' phone='075214532' />
      <Contact name='Gohan' email='gohan@gmail.com' phone='075212353' />
      <Contact name='Goten' email='goten@gmail.com' phone='078512356'/>
      <Contact name='Picolo' email='picolo@gmail.com' phone='075369357' />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
