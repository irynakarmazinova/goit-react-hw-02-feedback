import React from 'react';

const FeedbackOptions = ({
  // onGood,
  // onNeutral,
  // onBad,

  options,
  onLeaveFeedback,
}) => (
  <div>
    {/* <button className="btn" onClick={onGood}> */}
    <button className="btn" onClick={options}>
      {/* <button className="btn" onClick={onLeaveFeedback}> */}
      Good
    </button>
    {/* <button className="btn" onClick={onNeutral}> */}
    <button className="btn" onClick={options}>
      Neutral
    </button>
    {/* <button className="btn" onClick={onBad}> */}
    <button className="btn" onClick={options}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
