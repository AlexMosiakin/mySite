import React, { useState, useRef } from "react";
//Adding Components
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import Birds from './components/Birds';
import Three from './components/Tree';
import Cv from './components/Cv';
import Footer from './components/Footer';
import Up from './components/Up'
//Import styles
import "./styles/app.scss";

function App() {
  
  document.body.style.overflow = "hidden";
  setTimeout(function(){
    document.body.style.overflow = "visible";
  }, 4000);

  return (
    <div className={`App`}>
      <Header />
      <MainScreen />
      <Birds />
      <Three />
      <Cv />
      <Footer />
      <Up />
    </div>
  );

}


export default App;
