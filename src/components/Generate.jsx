import './Generate.css'
import getRecipe from '../Apis/getRecipe.js'
import { useState } from 'react';

export default function Generate({list}){
    let [recipe,setRecipe] = useState('');

    let fetchRecipe = async (list)=>{
        let res = await getRecipe(list);
        setRecipe(res);
    }
    return (
    <div className="generateCon">
      <div className="recipeReady">
        <span className="readyForARecipe">Ready for a recipe?</span>
        <span className="generateRecipe">Generate a recipe from your list of ingredients.</span>
      </div>
      <button className="button-primary" onClick={()=>fetchRecipe(list)}>Get a recipe</button>
      <span>{recipe && 'Suggested Recipe:'}</span>
      <span>{recipe}</span>
    </div>
    )
}