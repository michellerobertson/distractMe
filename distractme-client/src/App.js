import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';
import FactsPage from './components/FactsPage/FactsPage';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer'

function App() {
  const [fact, setFact] = useState(null); // State to store fetched fact

  const fetchFacts = async () => {
    // console.log('Testing Fetching facts...'); // for testing
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/facts`, {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      });
      const data = await response.json();
      console.log('Testing Fetched fact:', data); // testing logged fetched data
      setFact(data); // Update state with fetched data
      console.log('Testing Fetched fact state:', data); // testing logged updated state
    } catch (error) {
      console.error('Error fetching facts:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage fetchFacts={fetchFacts} />} />
          <Route path="/facts" element={<FactsPage fact={fact} fetchFacts={fetchFacts} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;