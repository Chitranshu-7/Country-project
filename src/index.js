import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pnr/Home'
import Login from './Pnr/Login';
import Basic from './RootReact/Basic';
import Loginform from './ProjectLoginform/Loginform';
import InputForm from './Pnr/InputForm';
import Rapp from './CountryProject/Rapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <Basic/> */}
{/* <Loginform/> */}
<Rapp/>
{/* <InputForm/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
