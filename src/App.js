import logo from './logo.svg';
import './App.css';
import Frozen from './components/frozenSection';
import Meat from './components/meatSection';
import Fruit from './components/fruitSection';

function App() {
  return (
    <div className="App">
      <Frozen/>
      <Meat/>
      <Fruit/>
    </div>
  );
}

export default App;
