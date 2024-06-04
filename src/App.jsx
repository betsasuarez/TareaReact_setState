import './App.css';
import EnhancedCounter from './Counters/EnhancedCounter';
import ImprovedCounter from './Counters/ImprovedCounter';
import PersonInfo from './Counters/PersonInfo';
import TodoList from './Counters/TodoList';

function App() {
  return (
    <>
      <EnhancedCounter></EnhancedCounter>
      <ImprovedCounter></ImprovedCounter>
      <PersonInfo></PersonInfo>
      <TodoList></TodoList>
    </>
  )
}

export default App
