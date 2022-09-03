import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackBtn } from './FeedBackOptions.styled';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      {options.map(key => (
        <li key={key}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackWrapper>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
