import React from 'react'
import "../style.css";
function List({works_list,addWork,hide}) {

  const checkWork =(e)=>{
    let todo = works_list.map((work)=>{
    if(parseInt(work.id) === parseInt(e.target.id))
    {
      return { ...work,  checked: !work.checked };
    }
    return work;
      } 
  );
  addWork(todo);
  console.log("HhHahahah");
  };



  const deleteWork =(e)=>{
    addWork(works_list.filter((work)=> parseInt(work.id) !== parseInt(e.target.id))
    )
  }

  const isComplated = (e) => {
    if (e.checked === true && hide === "All") {
      return "completed";
    } else if (e.checked === true && hide === "Active") {
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed") {
      return "hidden";
    }
  };
  
  // const filtered = (work)=>{
  //   const result = works_list.filter((req)=>{
  //     return req.isCompleted === work;
  //   })
  //   setList(result);
  // }
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  
  return (
   
         <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
       {  works_list.map((work)=>(
       
        <li key={work.id } id={work.id} className={isComplated(work)}>
           <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={work.checked}
                id={work.id}
                onClick={checkWork}
              />
              <label>{work.name}</label>
              <button
                className="destroy"
                id={work.id}
                onClick={deleteWork}
                // Silmek için butona basıldığında id yardımı ile state'den veriyi sildiriyoruz.
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
       
  );
       }

export default List
