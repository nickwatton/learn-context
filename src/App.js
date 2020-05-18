import React from 'react';
import './App.css';
import Header from './components/header';
import MainBody from './components/MainBody';
import {MyProvider} from './context/MyContext';


function App() {
  return (
    <div className="App">
      <MyProvider value={3}>
        <Header />
        <MainBody />
      </MyProvider>
    </div>
  );
}

export default App;
