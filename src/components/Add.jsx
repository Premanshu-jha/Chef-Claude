import { useState } from 'react'
import './Add.css'
import Ingredients from './Ingredients';

export default function Add(){
    let [list,setList] = useState([]);
    let [ingredient,setIngredient] = useState('');


    const handleAddition = (value) => {
         value = value.trim();
         if(value.length > 0){
            setList(prev=>[...prev,{id:Date.now(),value}]);
            setIngredient('');
         }
    }

    const handleDelete = (id)=>{
         setList(prev => prev.filter(item=>item.id!=id));
    }

    return (
        <div className="addCon">
        <div className="add">
          <input type="text" placeholder="e.g. oregano" className="input" value={ingredient} onChange={event=>setIngredient(event.target.value)}/>
          <button className="btn btn-primary btn-base" onClick={()=>handleAddition(ingredient)}>+ Add Ingredient</button>
        </div>
        <div>
            <Ingredients list={list} handleDelete={handleDelete}/>
        </div>
        </div>
    )
}