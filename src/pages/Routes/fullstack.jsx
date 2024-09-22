import { useEffect, useState } from "react";
import { Alldata, fullstackdeveloper } from "../../Asset/Data";
import '..//../Asset/Data'


const FUllTodolist= ()=>{
    const [tododata, settododata] = useState([]);

    useEffect(()=>{
    settododata(fullstackdeveloper);
    },[])

   
    return (
      <>
        <div className='cardbox'>
          {tododata.map((todo) => {
            return (
             < ToDoList {...todo} key={todo.id}  />
            )
          })}
        </div>
      </>
  
  
    )
  }

  const ToDoList = ({ id, name, description, }) => {
    return (
        <div className="card" key={id}>
            <h5 className="">{name}</h5>
            <p className="">{description}</p>
        </div>
    )
}

export default FUllTodolist;