import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = ({ fetchFacts }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    await fetchFacts();
    navigate('/facts');
  };

  return (
    <div>
      <h2>Click the button below for some instant distraction:</h2>
      <button onClick={handleClick} className="button-text">
        distractMe<br /> ;
        </button>
    </div>
  );
};

export default MainPage;