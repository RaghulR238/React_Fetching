import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Filter from './filter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<App/>}/>
  <Route exact path="/main" element={<App/>}/>
  <Route exact path="/filter" element={<Filter/>}/>
  <Route exact path="/filterOutput" element={<Filter/>}/>
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
