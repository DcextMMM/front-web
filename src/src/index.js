import React from 'react';
import ReactDOM from 'react-dom';
import Web from './Web';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Web />);

// If you want to start measurimport './index.css';ing performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
