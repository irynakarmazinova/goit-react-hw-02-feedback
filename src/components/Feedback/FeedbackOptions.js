import React from 'react';
import './feedbackOptions.scss';

const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,

  onHide,

  // options,
  // onLeaveFeedback,

  // onTotal,
  // onCountTotalFeedback,
  // onPositivePercentage,
  // onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <h2>Please leave feedback</h2>

    <button className="btn" onClick={onGood /*, onHide*/}>
      Good
    </button>
    <button className="btn" onClick={onNeutral /*, onHide*/}>
      Neutral
    </button>
    <button className="btn" onClick={onBad /*, onHide*/}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
