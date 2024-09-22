import { useEffect, useState } from "react";
import { Alldata, cybersecurity, fullstackdeveloper } from "../../Asset/Data";
import '..//../Asset/Data'


const CyberTodolist= ()=>{
    const [tododata, settododata] = useState([]);

    useEffect(()=>{
    settododata(cybersecurity);
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

export default CyberTodolist;