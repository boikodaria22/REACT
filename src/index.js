import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const element1 = React.createElement('span', {
//   children:'Привет'
// });
// const element2 = React.createElement('span', {
//   children:'мир'
// });


// const element = React.createElement('div', {
//     a:5, 
//     b:10,
//     children:[element1,' ',element2] 
//   });
// console.log(element)
// const element1 = <span> привет </span>;
// const element2 = <span> мир </span>;
// const jsxElement = <div> привет мир </div>;
// const jsxElement = <div>{element1}{element2}</div>;
// console.log(jsxElement)
// ReactDOM.render(jsxElement, document.getElementById('root'));

