import React from 'react';
import './statistics.scss';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  onCountTotalFeedback,
  positivePercentage,
  onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <h2>Statistics</h2>

    <ul className="list">
      <li className="item">Good: {good}</li>
      <li className="item">Neutral: {neutral}</li>
      <li className="item">Bad: {bad}</li>
      <li className="item">Total: {total /*,onCountTotalFeedback*/}</li>
      <li className="item">
        Positive feedback:{' '}
        {positivePercentage /*, onCountPositiveFeedbackPercentage*/}
      </li>
    </ul>
  </div>
);

// good={}
// neutral = {}
// bad = {}
// total = {}
// positivePercentage = {}

export default Statistics;
