import React,{useState,useRef} from "react";
import Button from "./Button";
import Modal from "./Modal";
import Header2 from "./Header2";
const NewTask=({handleOnAddTask})=>{
    const [newTask,setNewTask]=React.useState('')

    const modalRef=useRef()
    const handleOnSubmit=(newTask)=>{
        if(newTask.trim()==='')
        {
            modalRef.current.open()
        }
        else
        {

        handleOnAddTask(newTask)
        }

    }

    const handleOnChange=(event)=>{
        setNewTask(event.target.value)
    }
    return (
<div className="flex items-center gap-4">
<Modal ref={modalRef} buttonCaption="Close">


<Header2>Invalid Task</Header2>
            <p className="text-stone-400 mb-4">Oops. Looks like you have forgot to enter a value..</p>
            <p className="text-stone-400 mb-4">Please make sure you enter a text within task input field</p>
</Modal>
    <input type='text' className="w-64 px-2 py-1 rounded-sm bg-stone-200 " onChange={handleOnChange} value={newTask}></input>
    <Button className="text-stone-700 hover:text-stone-950" onClick={()=>{handleOnSubmit(newTask)}}> Add Task</Button>
</div>

    )

}

export default NewTask