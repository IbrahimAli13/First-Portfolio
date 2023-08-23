import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Body from './components/Body';
import './components/Body.css';
import Content from './components/Content';
import JustforFun from './components/JustforFun';
import MoreContent from './components/MoreContent';
import Uselessimg from './components/UselessImg';


const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Content />
      <JustforFun/>
      <MoreContent/>
      <Uselessimg/>
    </div>
  );
}

export default App;
