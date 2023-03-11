
import './App.css';
import Header from './components/navbar';
import {useState} from 'react'
import Home from './components/Home'
import Slide from './components/slideshow'
import Footer from './components/footer'


function App() {

  return (
    <div className="App">
     <Header/>
     <Home />
     <Footer/>
    </div>
  );
}

export default App;
