import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';

const DefalutStyle = styled.div`
  *{
    box-sizing: border-box;
  }
`

function App() {
  return (
    <DefalutStyle>
      <Header />
      <Main />
    </DefalutStyle>
  );
}

export default App;
