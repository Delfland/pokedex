import './App.css';
import background from "./images/pokemon2.jpeg";
import React from 'react'
import MyPokedex from './container/MyPokedex';

function App() {

  return (
    <div id='background' style={{ backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    width:'100%',
    height:'100%'
    }}>
    <MyPokedex/>
    </div>
  );
}

export default App;
