import React, { useState } from 'react';
import TodoInput from './Component/TodoInput';
import ToDoList from './Component/ToDoList';
import './App.css';


function App() {
  const [listToDo, setListToDo] = useState([]);
  let addList = (inputText) => {
    if(inputText!="")
      setListToDo([...listToDo, inputText])
  }

  const deleteListItem = (key) =>{
    let newToDoList = [...listToDo];
    newToDoList.splice(key,1);
    setListToDo([...newToDoList])
  }

  return (
    <div className='mian-container'>
      <div className='center-container'>
      <TodoInput addList= {addList}/>
      <h1 className='app-heading'> TODO LIST</h1>
      <hr></hr>
      {listToDo.map((listItem, i)=>{
        return(
          <ToDoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
      </div>
    </div>
  )
}

export default App












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


