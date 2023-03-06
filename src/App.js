import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const onIncreaseHandler = () => {
    setCount(count+1)
  }

  const onDecreaseHandler = () => {
    setCount(count-1)
  }

  const onSetZeroHandler = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick={onIncreaseHandler}>Increase</button>
      <button onClick={onDecreaseHandler}>Decrease</button>
      <button onClick={onSetZeroHandler}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
