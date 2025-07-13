import {useEffect, useState } from "react";
import {getTodos, addTodo} from "./api";


function App(){
  const [todos, setTodos] = useState<{id:number; title:string}[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(()=>{
    getTodos().then(setTodos);
  }, []);



  const handleAdd = async() =>{
    await addTodo(newTodo);
    const updated = await getTodos();
    setTodos(updated);
    setNewTodo("");
  };

  return(
    <div>
      <h1>Mis Tareas</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Escribe una tarea" />
      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );


}


export default App;




































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
