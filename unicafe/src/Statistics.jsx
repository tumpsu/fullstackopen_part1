import React from 'react';

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
            <tr><td>Good</td><td>{good}</td></tr>
            <tr><td>Neutral</td><td>{neutral}</td></tr>
            <tr><td>Bad</td><td>{bad}</td></tr>
            <tr><td>Total</td><td>{total}</td></tr>
            <tr><td>Average</td><td>{average.toFixed(2)}</td></tr>
            <tr><td>Positive</td><td>{positive.toFixed(1)} %</td></tr>
          </tbody>
        </table>
      </div>
    );
};

export default Statistics;
