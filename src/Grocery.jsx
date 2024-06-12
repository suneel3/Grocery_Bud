
import { useState , useEffect } from "react"
import Item from "./Item"


function Grocery() {
  const [input,setInput] = useState("");
  const [itemValue,setItemValue] = useState([]);



  function handleSubmit(e){
    e.preventDefault();

    let obj={};
    obj.item = input;
    obj.id = Date.now();
    obj.complete = false;

    setItemValue([...itemValue,obj]);
    setInput("");
  }
  function handleDelete(e,id){
    setItemValue(itemValue.filter((obj,idx)=>{
       return obj.id !== id;
    }))
  }
  function isComplete(e,item){
    const updatedItems = itemValue.map((element)=>{
       return  element.id == item.id ? {...element , complete : !element.complete} : element
    })
    setItemValue(updatedItems)
  }

    // for storing in local storage 
    useEffect(()=>{
      if(itemValue.length > 0){
        localStorage.setItem("items",JSON.stringify(itemValue));
      }
    },[itemValue])
  
    // for getting from local storage
    useEffect(()=>{
     if(localStorage.getItem("items")){
       let copyData = JSON.parse(localStorage.getItem("items"));
       setItemValue(copyData);
     }
    },[])
  

  return (
    <>
     <div className="container">
        <h1>Grocery Bud</h1>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <input className="inp" type="text" required placeholder="Enter product name" value={input} onChange={(e)=>{setInput(e.currentTarget.value)}}/>
            <button type="submit" className="btn"> Add Item
            </button>
        </form>

        <div className="item-container">
           {itemValue.map((obj,idx)=>{
              return <Item  key={idx} item={obj} handleDelete={handleDelete} isComplete={isComplete}/>
           })}
        </div>
     </div>
    </>
  )
}

export default Grocery