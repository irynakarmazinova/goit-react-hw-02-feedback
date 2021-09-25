import React from 'react';
import './statistics.scss';

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onCountTotalFeedback,
  onPositivePercentage,
  onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <div>
      <h2>Statistics</h2>
      <p>Good: {onGood}</p>
      <p>Neutral: {onNeutral}</p>
      <p>Bad: {onBad}</p>
      <p>
        Total: {onTotal}
        {/* {onCountTotalFeedback} */}
      </p>
      <p>
        Positive feedback: {onPositivePercentage}
        {/* {onCountPositiveFeedbackPercentage} */}%
      </p>

      <p>No feedback given</p>
    </div>
  </div>
);

// good={}
// neutral = {}
// bad = {}
// total = {}
// positivePercentage = {}

export default Statistics;
