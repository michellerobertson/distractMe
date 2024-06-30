import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.scss'; 

const MainPage = ({ fetchFacts }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    await fetchFacts();
    navigate('/facts');
  };

  return (
    <div className="main-page-container">
      <div className="content">
        <h2 className="content__text">Click the button below for some instant distraction:</h2>
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