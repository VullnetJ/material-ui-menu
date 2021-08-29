import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function MyTodos() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">

      <TextField name="date" type="date" label="Date" value={todo.date} onChange={inputChanged} />
      <TextField name="desc" variant="outlined" label="Description" onChange={inputChanged} value={todo.desc} />
      <Button size="large" onClick={addTodo} variant="contained" color="secondary">Add</Button>
      
      <table style={{ margin: 'auto' }}><tbody>
        {
          todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
            </tr>)
        }
      </tbody></table>
    </div>
  );
}
export default MyTodos;
