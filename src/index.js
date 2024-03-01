import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import Home from './pages/Home/';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './pages/Error';
import { Results } from './pages/Results';
import { Freelances } from './pages/Freelances';
import GlobalStyle from './utils/style/GlobalStyle';
import { SurveyProvider, ThemeProvider } from './utils/context';
import { Footer } from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/survey/:questionNumber' element={<Survey />} />
          <Route path='/results' element={<Results />} />
          <Route path='/freelances' element={<Freelances />} />
          {/** When all routes define above match not, then we show an error page :
           * s: 19 / 09 /1999
           */}
          <Route path='*' element={<Error />} />
        </Routes>
          <Footer />
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
