import React from 'react';

const MainPage = ({ fetchFacts }) => {
  return (
    <div>
      <h2>Click the button below for some instant distraction:</h2>
      <button onClick={fetchFacts} className="button-text">
        distractMe<br /> ;
        </button>
    </div>
  );
};

export default MainPage;