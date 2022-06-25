import "./App.css";
import Todos from "./components/todos";
import TodoState from "./context/todoState";
function App() {
  return (
    <>
      <TodoState>
        <Todos />
      </TodoState>
    </>
  );
}

export default App;
