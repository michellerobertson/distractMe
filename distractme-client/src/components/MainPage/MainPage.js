import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.scss'; 

const MainPage = ({ fetchFacts, fetchJokes }) => {
  const [distractionType, setDistractionType] = useState('fact');
  const navigate = useNavigate();

  const handleDistractionTypeChange = (event) => {
    setDistractionType(event.target.value);
  };

  const handleClick = async () => {
    try {
      if (distractionType === 'fact') {
        await fetchFacts();
        navigate('/facts');
      } else if (distractionType === 'joke') {
        await fetchJokes();
        navigate('/jokes');
      }
    } catch (error) {
      console.error('Error fetching distraction:', error);
    }
  };

  return (
    <div className="main-page-container">
      <div className="content">
        <p className="content__text">Choose your distraction:</p>
        <div className="content__radio">
          <label>
            <input
              type="radio"
              name="distractionType"
              value="fact"
              checked={distractionType === 'fact'}
              onChange={handleDistractionTypeChange}
            />
            Fact
          </label>
          <label>
            <input
              type="radio"
              name="distractionType"
              value="joke"
              checked={distractionType === 'joke'}
              onChange={handleDistractionTypeChange}
            />
            Humour
          </label>
        </div>
        <div className="content__button">
          <button onClick={handleClick} className="content__button-text">
            distractMe<br />
            <span className="content__button-text--semicolon">;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;