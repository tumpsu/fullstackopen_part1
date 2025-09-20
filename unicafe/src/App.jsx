import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

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
        <table>
          <tbody>
            <tr><td>Good</td><td>{good}</td></tr>
            <tr><td>Neutral</td><td>{neutral}</td></tr>
            <tr><td>Bad</td><td>{bad}</td></tr>
            <tr><td>Total</td><td>{total}</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
export default App;
