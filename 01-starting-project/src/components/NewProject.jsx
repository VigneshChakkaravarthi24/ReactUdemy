import {React,useRef,forwardRef, Fragment} from "react";

import Input from "./Input";
import Modal from "./Modal";
import Header2 from "./Header2";

const   NewProject=({onAdd,onCancel})=>{
    const titleRef=useRef()
    const descriptionRef=useRef()
    const dueDateRef=useRef()
    const modalRef=useRef()

    const handleOnSave=()=>{
        const enteredTitle= titleRef.current.value
        const enteredDescription= descriptionRef.current.value
        const enteredDueDate= dueDateRef.current.value
        const Project = {title:enteredTitle,description:enteredDescription,dueDate:enteredDueDate}
        ///validation
        if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()==='')
        {
            modalRef.current.open()



            return
        }
        onAdd(Project)



      }
    
    return (
    <Fragment>
        <Modal ref={modalRef} buttonCaption="Close">

            <Header2>Invalid Element</Header2>
            <p className="text-stone-400 mb-4">Oops. Looks like you have forgot to enter a value..</p>
            <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field</p>
        </Modal>
    <div className="w-{35rem} mt-16">

        <menu className="flex items-center justify-end gap-4 my-4">

            <li><button onClick={()=>{onCancel()}}className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleOnSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input type="text"ref={titleRef} label="Title"/>
            <Input ref={descriptionRef}label="Description" textarea/>
            <Input type="date" ref={dueDateRef}label="Due Date" />
        </div>
    </div>
    </Fragment>)
}

export default NewProject