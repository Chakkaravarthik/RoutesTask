import { useEffect, useState } from "react";
import { Alldata, datascience, fullstackdeveloper } from "../../Asset/Data";
import '..//../Asset/Data'


const DataTodolist= ()=>{
    const [tododata, settododata] = useState([]);

    useEffect(()=>{
    settododata(datascience);
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

export default DataTodolist;