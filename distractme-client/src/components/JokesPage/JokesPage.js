import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './JokesPage.scss'; 

function JokesPage({ joke, fetchJokes }) {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!joke || joke.length === 0) {
        navigate('/');
      }
    }, [joke, navigate]);
  
    const handleFetchNewJoke = async () => {
      await fetchJokes();
    };
  
    return (
      <div className="jokes-page-container">
        <div className="content">
          <p className="content__text">{joke && joke.length > 0 ? joke[0].joke : 'Loading joke...'}</p>
          <div className="content__button">
            <button onClick={handleFetchNewJoke} className="content__button-text">
              distractMe<br />
              <span className="content__button-text--semicolon">;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default JokesPage;