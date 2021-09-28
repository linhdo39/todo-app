import './App.css';
import User from './User/UserBar';
import Create from './createItem';
import Todolist from './todolist';

function App() {
  const todos = [
      {
        user: "Linh",
        title: "Homework",
        create_date: Date(Date.now()).toString(),
        description: "Try to finish the homework"
      },
      {
        user: "Linh",
        title: "House",
        create_date: Date(Date.now()).toString(),
        description: "Clean up the house"
      },
      {
        user: "Linh",
        title: "Cook",
        create_date: Date(Date.now()).toString(),
        description: "Cook dinner"
      }
  ]
  return (
    <div>
        <User/>
        <Create user= "Linh" />
        <Todolist Todos={todos} />
    </div>
  )
}

export default App;
