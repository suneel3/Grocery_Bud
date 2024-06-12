
import DeleteIcon from "@mui/icons-material/Delete";
function Item({item,handleDelete,isComplete}) {
  return (
    <>
      <div className="item">
        <div className="item-inp">
          <input type="checkbox" onChange={(e)=>{isComplete(e,item)}}  checked={item.complete}/>

          <p className={(item.complete) ?  "line-through" : ""}>{item.item}</p>
        </div>

        <div className="item-icon">
          <DeleteIcon onClick={(e)=>{handleDelete(e,item.id)} } style={{cursor :"pointer"}}/>
        </div>
      </div>
    </>
  );
}

export default Item;