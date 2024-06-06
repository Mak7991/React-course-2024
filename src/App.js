import './App.css';
import Todos from './Todos';

function App() {
  const todos = [
    {
      id: 1,
      task: "do laundary",
      date: "10/5/2024"
    },
    {
      id: 2,
      task: "water plants",
      date: "10/5/2024"
    }
  ]

  return (
    <div className="App">
      <Todos name={todos} />
    </div>
  );
}

export default App;
