import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './pages/about';
import Book from './pages/book';
import Contact from './pages/contact';
import Home from './pages/home';
import Review from './pages/review';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<Book />} />
        <Route path='contact' element={<Contact />} />
        <Route path='review' element={<Review />} />


      </Route>
    </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
