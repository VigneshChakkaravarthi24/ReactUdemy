import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected';
import {React,useState} from 'react'
import SelectedProject from './components/SelectedProject';

function App() {


  const [projectState,setProjectState]=useState({selectedProject:undefined,
    projects:[],
    tasks:[]
  })

const handleAddTask=(newTask)=>{


  setProjectState(preState=>{

  const taskID=Math.random()
  const task={
    id:taskID,
    projectId:preState.selectedProject,
    text:newTask
  }


    const newValue={...preState,
      tasks:[...preState.tasks,task]
    }
    return newValue
  })


}
const handleDeleteTask=(taskID)=>{
let newTasks=projectState.tasks.filter(item=>item.id!=taskID)
console.log("Hey inside Delete task")

  setProjectState(preState=>{


    const newValue={
      ...preState,
      tasks:newTasks
    }
    return newValue
  })

}

  const handleStartAddProject = () => {
    setProjectState(previousValue => {
        const newValue = {
            ...previousValue,
            selectedProject: null
        };
        console.log(newValue); // For debugging
        return newValue;
    });
};
const handleOnCancel=()=>{
  setProjectState(preState=>{
    return {
      selectedProject:null,
      ...preState
    }
  })
}
const handleAddProject=(project)=>{
  setProjectState(prevState=>{

    const projectId = Math.random()
    const newProject = {...project,id:projectId}
    return{
      ...prevState,
      selectedProject:null,
    projects:[...prevState.projects,newProject]
    }
  })
}
const handleDelete=()=>{
  setProjectState(preState=>{
    const newValue={
      ...preState,
      selectedProject:undefined,
      projects:preState.projects.filter(item=>item.id!=preState.selectedProject)
    }
    return newValue
  })
}
let content
if(projectState.selectedProject===null)
{
  content=<NewProject onAdd={handleAddProject} onCancel={handleOnCancel}/>
}
else if(projectState.selectedProject===undefined)
{
  content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>
}
else
{

 let project=projectState.projects.find(item=>item.id==projectState.selectedProject)
 let tasks = projectState.tasks.filter(item=>item.projectId==projectState.selectedProject)
  if(project)
  {
    content=<SelectedProject project={project}  onAdd={handleAddTask} tasks={tasks}onDelete={handleDelete} onRemoveTask={handleDeleteTask}/>
  }
}



const handleSelectProject=(id)=>
{
  console.log(id)
  setProjectState(previousValue => {
    const newValue = {
        ...previousValue,
        selectedProject: id
    };
    console.log(newValue); // For debugging
    return newValue;
});


}
  return (

    <main className="h-screen my-8 flex gap-8">
<ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects } onSelectProject={handleSelectProject} selectedProjectID={projectState.selectedProject}/>
{content}
</main>
  );
}

export default App;
