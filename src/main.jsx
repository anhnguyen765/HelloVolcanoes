// Import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import files
import './index.css';
// Import pages
import App from './App.jsx';
import Volcano from './pages/volcano/volcano.jsx';
import VolcanoesList from './pages/volcanoesList/volcanoesList.jsx';
import Login from './pages/login/login.jsx'
import Logout from './pages/logout/logout.jsx';
// Import components
import Register from './pages/register/register.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/volcano' element={<Volcano />} />
        <Route path='/volcanoes' element={<VolcanoesList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);