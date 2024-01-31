
import { useDispatch, useSelector } from 'react-redux';
import { checked } from "../../slices/todoSlice"
import Item from "../Item/Item"
import { useState } from 'react';

export default function() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo);
    const users = useSelector((state) => state.user);
    const [filterByID, setFilterByID] =useState(null)
  
    console.log(users);

    function changeChecked(id) {
        dispatch(checked({ id })); 
    }

    return (
        
        <div className='_container'>
           <div className='users'>
           <div onClick={() => setFilterByID(null)}>
                        Show All
            </div>
           {users.value.map(e => {
                return (
                    <div key={e.id} onClick={() => setFilterByID(e.id)}>
                        {e.name}
                    </div>
                )
            })}
           </div>
            <div className='todos'>
            {todos.value.filter(e => filterByID != null ? e.uid == filterByID : true).map(e => {
                return <Item key={e.id} name={e.name} isChecked={e.checked} changeChecked={changeChecked} id={e.id} />
            })}
            </div>
        </div>
    )
}