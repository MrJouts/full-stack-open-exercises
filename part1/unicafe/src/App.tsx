import { useState } from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
};

const Statistics = ({ good, neutral, bad }: StatisticsProps) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = `${((good / total || 0) * 100).toFixed(1)} %`;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All" value={total} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive" value={positive} />
      </tbody>
    </table>
  );
};

type StatisticsLineProps = {
  text: string;
  value: number | string;
};

const StatisticsLine = ({ text, value }: StatisticsLineProps) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
