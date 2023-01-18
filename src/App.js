import './css/main.scss';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
