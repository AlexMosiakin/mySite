import React  from 'react';
//Adding Components
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import Birds from './components/Birds';
import Three from './components/Tree';
import Cv from './components/Cv';
import Footer from './components/Footer';
//Import styles
import "./styles/app.scss";

function App() {
  return (
    <div className={`App`}>
      <Header />
      <MainScreen />
      <Birds />
      <Three />
      <Cv />
      <Footer />
    </div>
  );
}


export default App;
