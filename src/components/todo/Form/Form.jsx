import React, { useEffect } from 'react'
import { useState } from 'react'




function Form({addWork, works_list}) {

    const [form, setForm] = useState("");
      const onChangeInput = (e)=>{
        setForm(e.target.value);
    }
 

    const onSubmit = (e)=>{
      e.preventDefault();
      if(form==="" )
      return false;

      addWork([...works_list, {
        id:works_list.length>0 ? works_list[works_list.length - 1].id + 1 : 0,
        name:form,
        checked:false}]);
    }

    useEffect(() => {
      setForm("");
      localStorage.setItem("works", JSON.stringify(works_list));
    }, [works_list]); 
  

  return (
    <header className="header">
      <h1>works_list</h1>
    <form onSubmit={onSubmit}>
    <div>
      <input placeholder='What is the work'  className="new-todo" autoFocus value={form} onChange={onChangeInput}></input>
    </div>
    </form>
    </header>
    

  )
}

export default Form
