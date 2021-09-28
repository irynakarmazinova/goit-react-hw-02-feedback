import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul className="list">
      <li className="item">Good: {good}</li>
      <li className="item">Neutral: {neutral}</li>
      <li className="item">Bad: {bad}</li>
      <li className="item">Total: {total}</li>
      <li className="item">Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>
);

export default Statistics;
