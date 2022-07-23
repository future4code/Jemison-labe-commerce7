import React from 'react';
import './App.css';
import Home from './components/Home';
import { Header, Main } from './style';

function App() {
  return (
    <Main>
      <Header>
        <h1>VIA LÁCTEA STORE</h1>
        <h2>Para os aficcionados pelo espaço sideral!</h2>
      </Header>
       <Home/>
    </Main>

  );
}

export default App;
