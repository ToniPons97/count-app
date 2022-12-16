import './App.css';
import { Counter } from './components/counter';

function App() {
  return <Counter 
          initialValue={5} 
          incrementBy={6}
          milSeconds={500}
        />;
}

export default App;
