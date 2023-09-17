import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Body from './components/Body';
import './components/Body.css';
import Content from './components/Content';
import JustforFun from './components/JustforFun';
import MoreContent from './components/MoreContent';
import Map from './components/Map';
import Footer from './components/Footer';

const App = () => {
 
  const lat = 33.309365; 
  const lng = 44.370772; 
  return (
    <div>
      <Header />
      <Body />
      <Content />
      <JustforFun />
      <MoreContent />
      <Map lat={lat} lng={lng} />
      <Footer/>
    </div>
  );
}

export default App;
