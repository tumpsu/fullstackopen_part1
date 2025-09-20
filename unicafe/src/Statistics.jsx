import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  if (total === 0) { 
    return <p>Ei annettuja palautteita</p>;
  }
  return (
        <div>
          <div>
          Keskiarvo ja prosentti pyöristetty 1. desimaalin tarkkuuteen.
          </div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average.toFixed(2)} />
            <StatisticLine text="Positive" value={positive.toFixed(1)} />
      </tbody>
        </table>
      </div>
    );
};

export default Statistics;
