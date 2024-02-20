import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Home from './pages/Home/';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey/';
import Header from './components/Header';
import ClientForm from './components/ClientForm';
import FreelanceForm from './components/FreelanceForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />}>
            <Route path='client' element={<ClientForm />} />
            <Route path='freelance' element={<FreelanceForm />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
