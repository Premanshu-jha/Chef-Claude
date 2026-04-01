import './Add.css'

export default function Add(){
    return (
        <div className="add">
          <input type="text" placeholder="e.g. oregano" class="input" />
          <button className="btn btn-primary btn-base">+ Add Ingredient</button>
        </div>
    )
}