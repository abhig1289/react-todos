import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
const List=(props)=>{
  // console.log('props',props)
  const deleteItemFromList=key=>{
    const newList = props.itemList.filter(itemObj => {return itemObj.key !== key})
    props.updateItemList(newList)
  }
  return(<div>
  {props.itemList.map(itemObj=>{
    return (<div>
    <p>{itemObj.item} <Button className='btn btn-danger' onClick={()=>deleteItemFromList(itemObj.key)}>delete</Button></p>
    {/* <Button className='btn btn-danger' onClick={()=>deleteItemFromList(itemObj.key)}>delete</Button> */}
    
    </div>)
    }
    )}
  </div>
  );
}
export default List