import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Feedback } from './App.styled';
import Statistics from './Statistics/Statistics';
import FeedBackOptions from './FeedBackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = option => {
    setFeedback(state => ({
      ...state,
      [option]: state[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const keys = Object.keys(feedback);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;
  };

  return (
    <Feedback>
      <Section title="Please leave feedback">
        <FeedBackOptions options={keys} onLeaveFeedback={handleButtonClick} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <GlobalStyle />
    </Feedback>
  );
};
