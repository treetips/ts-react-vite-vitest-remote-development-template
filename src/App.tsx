import { useState } from "react";
import "./App.scss";
import logo from "./assets/images/logo.svg";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>React, Vite, Vitest, Remote Development Example !</h2>
        <p>
          <button type="button" onClick={handleCount}>
            count is: {count}
          </button>
        </p>
      </header>

      <section className="container">
        <table className="env-key-values">
          <thead>
            <tr>
              <th>.env key</th>
              <th>.env value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>{"import"}.meta.env.MODE</span>
              </td>
              <td>
                <span>{import.meta.env.MODE}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>{"import"}.meta.env.VITE_SAMPLE</span>
              </td>
              <td>
                <span>{import.meta.env.VITE_SAMPLE}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
