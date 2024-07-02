import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FactsPage.scss'; 

function FactsPage({ fact, fetchFacts }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!fact || fact.length === 0) {
      navigate('/');
    }
  }, [fact, navigate]);

  const handleFetchNewFact = async () => {
    await fetchFacts();
  };

  return (
    <div className="facts-page-container">
      <div className="content">
        <p className="content__text">{fact && fact.length > 0 ? fact[0].fact : 'Loading fact...' }</p>
        <div className="content__button">
          <button onClick={handleFetchNewFact} className="content__button-text">
            distractMe<br />
            <span className="content__button-text--semicolon">;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FactsPage;