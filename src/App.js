import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import "./styles.css";
import {useState} from 'react'
import List from './List'
const App=()=> {
  const [currentItem,setCurrentItem]=useState([])
  const [itemList,updateItemList]=useState([])

  const onChangeHandler=(e)=>{
// console.log('current value:',e.target.value)

setCurrentItem(e.target.value)

}
  
  const addItemToList=()=>{ 
 
updateItemList([...itemList,{item:currentItem,key:Date.now()}])
    
setCurrentItem('')
  }
  return (
    <div className="App">
    <h1>abhi's todos</h1>
       <div className="Wrapper">
       <div className="mb-3 Input-Wrapper">
      <input className="me-2 p-2" placeholder='add a task' value={currentItem} onChange={onChangeHandler}/>
      <Button className='btn btn-primary' onClick={addItemToList}>additems</Button>
    </div>
    <List itemList={itemList} updateItemList={updateItemList}/>
    </div>
    </div>
  );
}
export default App
