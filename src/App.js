import './App.css';
import { useState } from 'react';
import deleteIcon from './icons8-delete.svg'
import editIcon from './edit.svg'
function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [uid, setUid] = useState()
  const [update, setUpdate] = useState(false)
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  const handleTask = ()=>{
    setList([...list,input])
    setInput("")
  }
  const handleUpdate = ()=>{
    list.splice(uid,1,input)
    setInput("")
  }
  const handleDelete = (i)=>{
     setList(list.filter((ele)=>ele!==list[i]))
  }
  const handleEdit = (i)=>{
     const filterList = list.filter((ele)=>ele===list[i])
     setInput(filterList[0])
     setUid(i)
     setUpdate(true)
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <div className='container'>
        <div className='input-box'>
          <input type='text' value={input} onChange={(e)=>handleInput(e)} placeholder='Add a new task...' />
          {update ?<button onClick={handleUpdate}>Update Task</button> : <button onClick={handleTask}>Add Task</button>}
        </div>
        <div className='list'>
          <ul>
            {list.map((task,i)=><li key={i}>{task} <img  onClick={()=>handleDelete(i)} className='dlt-icon' src={deleteIcon} alt='dlt'/> <img  onClick={()=>handleEdit(i)} className='edit-icon' src={editIcon} alt='edit'/>  </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
