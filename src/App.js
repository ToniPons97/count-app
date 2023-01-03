import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {

  const [toggleCounter, setToggleCounter] = useState(false);

  const handleToggleCounter = () => {
    setToggleCounter(toggle => !toggle);
  } 

  return (
    <div>
      {!toggleCounter && <Counter />}
      <button onClick={handleToggleCounter}>Toggle counter</button>
    </div>
  );
}

export default App;
