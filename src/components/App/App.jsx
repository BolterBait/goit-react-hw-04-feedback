import { useState, useEffect } from 'react';

import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);


const handleState = () => {
  setGood(prevState => prevState + 1);
  setBad(prevState => prevState + 1);
  setNeutral(prevState => prevState + 1);
}

useEffect(() => {
  total = good + bad + neutral;
 }, [good, bad, neutral]);

useEffect(() => {
  const positive = Math.floor((good/total)*100 || 0);
 }, [good, total]);


  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleState}
           />
      </Section>
      <Section title="Statistics">
        {!!total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// export class App extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // keys = Object.keys(this.state);

  // handleState = e => {
  //   const name = e.target.name;
  //   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  // };

  // countTotalFeedback = () => {
  //   return this.state.bad + this.state.good + this.state.neutral;
  // };

  // countPositiveFeedbackPercentage = () =>
  //   Math.floor((this.state.good / this.countTotalFeedback()) * 100 || 0);

  // render() {
  //   const total = this.countTotalFeedback();
  //   const positive = this.countPositiveFeedbackPercentage();
    // return (
    //   <div>
    //     <Section title="Please leave feedback">
    //       <FeedbackOptions
    //         onLeaveFeedback={this.handleState}
    //         options={this.keys}
    //       />
    //     </Section>
    //     <Section title="Statistics">
    //       {!!total ? (
    //         <Statistics
    //           good={this.state.good}
    //           neutral={this.state.neutral}
    //           bad={this.state.bad}
    //           total={total}
    //           positivePercentage={positive}
    //         />
    //       ) : (
    //         <Notification message="There is no feedback" />
    //       )}
    //     </Section>
    //   </div>
    // );
//   }
// }
