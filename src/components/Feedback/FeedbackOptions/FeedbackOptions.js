import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className="feedback_list">
      {options.map(option => (
        // option - имя одного state`a
        // для key не использовать index, только id
        <li key={option} className="feedback_item">
          <button type="submit" className="btn" onClick={onLeaveFeedback}>
            {/* {option.charAt(0).toUpperCase() + option.slice(1)} */}
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
