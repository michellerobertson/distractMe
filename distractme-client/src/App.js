import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';
import FactsPage from './components/FactsPage/FactsPage';
import JokesPage from './components/JokesPage/JokesPage';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer'

function App() {
  const [fact, setFact] = useState(null); // State to store fetched fact
  const [joke, setJoke] = useState(null); // State to store fetched joke

  const fetchFacts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/facts`);
      const data = await response.json();
      setFact(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching facts:', error);
    }
  };

  const fetchJokes = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/jokes`);
      const data = await response.json();
      setJoke(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage fetchFacts={fetchFacts} fetchJokes={fetchJokes} />} />
          <Route path="/facts" element={<FactsPage fact={fact} fetchFacts={fetchFacts} />} />
          <Route path="/jokes" element={<JokesPage joke={joke} fetchJokes={fetchJokes} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;