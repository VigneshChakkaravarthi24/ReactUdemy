import React from 'react';
import Button from './Button';

export default function ProjectsSidebar({onStartAddProject,projects,onSelectProject,selectedProjectID}) {
let css_class="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"

    if(projects.id=selectedProjectID)
    {
        css_class=css_class+" bg-stone-800 text-stone-200"
    }
    else
    {
        css_class=css_class+" text-stone-400"
    }
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul>               
                
                 {projects.map(item=>  
                    {    return(

                        
                    <li key={item.id}><button  onClick={()=>{onSelectProject(item.id)}} className={css_class}>
                       {item.title}</button></li>)}
                )}
            </ul>
        </aside>
    );
}

