import DeleteIcon from "./svgs"
import './Ingredients.css'


export default function Ingredients({list,handleDelete}){

    return <div className="listCon">
    <span className='title'>{list.length > 0?'Ingredients on hand:':''}</span>
    <ul>
    {
    list.map((item)=>{
        return <li key={item.id}>
            <div className="listItem">
            <span className="itemName">{item.value}</span>
            <button className="delete-btn" onClick={()=>handleDelete(item.id)}>
                <DeleteIcon />
               </button>
            </div>
        </li>
    })
}
</ul>
</div>
}