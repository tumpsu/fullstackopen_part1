import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Tilastot</h2>
      {total === 0 ? (
        <p>Ei annettuja palautteita</p>
      ) : (
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
      )}
    </div>
  );
};
export default App;
