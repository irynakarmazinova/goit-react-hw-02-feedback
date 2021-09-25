import React from 'react';
import './feedbackOptions.scss';

const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onCountTotalFeedback,
  onPositivePercentage,
  onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <h1 className="visually_hidden">Feedback</h1>
    <h2>Please leave feedback</h2>
    <button className="btn" onClick={onGood}>
      Good
    </button>
    <button className="btn" onClick={onNeutral}>
      Neutral
    </button>
    <button className="btn" onClick={onBad}>
      Bad
    </button>
  </div>
);

// options = {};
// onLeaveFeedback = {};

export default FeedbackOptions;
