import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/Main';
import Facts from './components/FactsPage/Facts';
import About from './components/AboutPage/About';

function App() {
  const fetchFacts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/facts`, {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching facts:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage fetchFacts={fetchFacts}/>} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;