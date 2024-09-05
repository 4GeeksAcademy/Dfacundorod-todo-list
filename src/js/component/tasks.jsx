import React, {useState} from "react";

export function Tasks(){
    const [task, setTask]=useState(['Make the bed', 'Wash my hands', 'Eat', 'Walk the dog'])
	const [inputTask, setInputTask]= useState('')
	const [visibleIndex, setVisibleIndex]= useState('none')
	
	
	function captureTask(e){
		setInputTask(e.target.value)
	};

	function addNewTask(e){
		e.preventDefault();
		setTask([...task, inputTask]);
		setInputTask('')
	}

	function deleteTask(index){
		const incompleteTasks= task.filter((_,taskIndex)=> taskIndex!==index);
		setTask(incompleteTasks);
	}

	return (
		<div className="bodyTasks">
			<h1>todos</h1>
			<div className="papper">
			<form onSubmit={addNewTask}>
				<input className="inputTask" onChange={captureTask}  value={inputTask} type="text" placeholder="Waths need to be done?" />
			</form>
				{task.length===0 ? <h2 className="task">No hay tareas, añadir tareas</h2> :
				task.map((elem, index)=>(
					<div key={index} className="taskContainer" onMouseOver={()=>{setVisibleIndex(index)}} onMouseLeave={()=>{setVisibleIndex('none')}}>
						<h2 className="task" >{elem}</h2>
						<button style={{display:visibleIndex=== index ? 'flex': 'none' }} className="deleteTask" onClick={()=>deleteTask(index)}>X</button>
					</div>
				))}
				<h3>{task.length} items left.</h3>
			</div>
		</div>
	);
};