import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Body from './components/Body';
import Content from './components/Content';
import JustforFun from './components/JustforFun';

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Content />
      <JustforFun/>
    </div>
  );
}

export default App;
