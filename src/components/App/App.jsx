import { useState } from 'react';

import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = 0;
  let positivePercentage = 0;

  const handleState = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  total = good + bad + neutral;
  positivePercentage = Math.floor((good / total) * 100 || 0);

  const keys = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleState} options={keys} />
      </Section>
      <Section title="Statistics">
        {!!total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
