import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FactsPage({ fact, fetchFacts }) {
  // console.log('Fact received test:', fact); // Test log
  console.log('Type of fact:', typeof fact);
  console.log('Fact object:', fact);

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
    <div>
      {/* <h1>Facts Page</h1> */}
      {fact && fact.length > 0 && (
        <div>
          <p>{fact[0].fact}</p>
          <button onClick={handleFetchNewFact} className="button-text">distractMe<br /> ;</button>
        </div>
      )}
    </div>
  );
}

export default FactsPage;