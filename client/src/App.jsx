import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneView from './view/PhoneView';
import CocinaView from './view/CocinaView';
import ColchonesView from './view/ColchonesView';
import ConsolesView from './view/ConsolesView';
import ElectroDomesticosView from './view/ElectroDomesticosView';
import InformaticaView from './view/InformaticaView';
import JugueteriaView from './view/JugueteriaView';
import MercadoView from './view/MercadoView';
import NavidadView from './view/NavidadView';
import TvView from './view/TvView';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<PhoneView />} />
          <Route path="/cocina" element={<CocinaView />} />
          <Route path="/colchones" element={<ColchonesView />} />
          <Route path="/consolas" element={<ConsolesView />} />
          <Route path="/electrodomesticos" element={<ElectroDomesticosView />} />
          <Route path="/informatica" element={<InformaticaView />} />
          <Route path="/jugueteria" element={<JugueteriaView />} />
          <Route path="/mercado" element={<MercadoView />} />
          <Route path="/navidad" element={<NavidadView />} />
          <Route path="/televisores" element={<TvView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
