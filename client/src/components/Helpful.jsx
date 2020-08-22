/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/Review.css';

const Helpful = ({ addHelpfulRating, reviewHelpfulCount, reviewID }) => {
  return (
    <button style={{ border: '1px solid #c5cbd5', padding: '0 7px' }} onClick={addHelpfulRating} className="reviewButtons">
      helpful
      {reviewHelpfulCount}
    </button>
  );
};

export default Helpful;
