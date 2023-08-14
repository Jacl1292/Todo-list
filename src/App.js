import React, { useState } from 'react';
import './App.css';



function App() {
  const [tasks,setTasks] = useState([
    { id: 1, value: "sacar la basura" },
    { id: 2, value: "hacer la compra" },
    { id: 3, value: "hacer el aseo" },
    { id: 4, value: "lavar platos" }]);
  const [hoveredItems, setHoveredItems] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = true;
      return updatedHoveredItems;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = false;
      return updatedHoveredItems;
    });
  };

  const handleKeyDown = e =>{
     if (e.keyCode === 13 && e.target.value !=="") {
      const newTask = {
        id: Date.now(),
        value: e.target.value
      };
      setTasks([...tasks, newTask]);
      e.target.value = "";
     }
  };

  const handleDelete = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div className='Container'>
      
      <div className='form'>
        <h1>Todo List</h1>
        <div className='form-input'>
           <input className='input' onKeyDown={handleKeyDown}/>
        </div>
        {tasks.map((task)=> (

          <div className='form-todo row' key={task.id}
              onMouseEnter={() => handleMouseEnter(task.id)}
              onMouseLeave={() => handleMouseLeave(task.id)}>
            <p className='col-12'>{task.value}</p>
            <i className={`far fa-times-circle fa-2x btn col-1 ${hoveredItems[task.id] ? '' : 'invisible'}`}
              style={{ color: "#585656" }}
              onClick={()=>handleDelete(task.id)}></i>
          </div>
        ) 
        )}
        <div className='form-indic text-body-secondary'><p>{tasks.length} items left.</p></div>
        <div className='form-page1'></div>
        <div className='form-page2'></div>

      </div>
    </div>
  )
}

export default App;
