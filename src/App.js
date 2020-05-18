import React from 'react';
import './App.css';
import Header from './components/header';
import MainBody from './components/MainBody';
import {MyProvider} from './context/MyContext';

function App() {
  return (
    <div className='App'>
      <Header />
      <MyProvider value={3}>
        <MainBody />
      </MyProvider>
    </div>
  );
}

export default App;
