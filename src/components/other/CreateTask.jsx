import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const [task , setTask] = useState({});
    

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle, 
            taskDescription, 
            taskDate, 
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const data = userData.employees;
        
        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask);
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
            }
        });

        setUserData({...userData, employees: data})
        localStorage.setItem('employees', JSON.stringify(data));

        setTaskTitle("")
        setTaskDescription("")
        setTaskDate("")
        setAssignTo("")
        setCategory("")
    }

    return (
        <div className='mt-10 bg-[#1f1f1f] rounded-xl shadow-lg border border-gray-800 p-8'>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Task Title</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded-md outline-none bg-transparent border border-gray-600 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all' 
                            type="text" 
                            placeholder='e.g., Make a UI design' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Due Date</h3>
                        <input 
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded-md outline-none bg-transparent border border-gray-600 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-400 transition-all cursor-pointer' 
                            type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Assign To</h3>
                        <input 
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded-md outline-none bg-transparent border border-gray-600 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all' 
                            type="text" 
                            placeholder='e.g., John Doe' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-2'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded-md outline-none bg-transparent border border-gray-600 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all' 
                            type="text" 
                            placeholder='e.g., Design, Dev, UI' 
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-end pt-1'>
                    <div className='w-full'>
                        <h3 className='text-sm text-gray-300 mb-2'>Task Description</h3>
                        <textarea 
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className='w-full h-56 text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-gray-600 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all resize-none leading-relaxed' 
                            placeholder='Detailed description of the task...'
                        ></textarea>
                    </div>
                    <button className='w-full mt-6 bg-emerald-600 hover:bg-emerald-700 tracking-wide text-white font-semibold py-3 px-4 rounded-md transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#1C1C1C]'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
    }

export default CreateTask