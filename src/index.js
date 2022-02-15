import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = (
  // write your React Code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div>
        <h3>Vegeta</h3>
        <h4>📞 03.49.79.52.46</h4>
        <button>Delete</button>
      </div>
      <div>
        <h3>Goku</h3>
        <h4>📞 02.56.38.50.10</h4>
        <button>Delete</button>
      </div>
      <div>
        <h3>Picolo</h3>
        <h4>📞 04.89.73.92.89</h4>
        <button>Delete</button>
      </div>
      <div>
        <h3>Goten</h3>
        <h4>📞 02.82.47.55.96</h4>
        <button>Delete</button>
      </div>
      <div>
        <h3>Trunks</h3>
        <h4>📞 02.82.47.55.96</h4>
        <button>Delete</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
