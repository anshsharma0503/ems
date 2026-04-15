import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({data, firstName}) => {

    const [userData, setUserData] = useContext(AuthContext);

    const handleCompleteTask = () => {
        const employeesData = [...userData.employees];
        const employeeIndex = employeesData.findIndex(e => e.firstName === firstName);
        if(employeeIndex === -1) return;
        
        const employee = employeesData[employeeIndex];
        const taskIndex = employee.tasks.findIndex(t => t.taskTitle === data.taskTitle && t.taskDate === data.taskDate);
        if(taskIndex === -1) return;
        
        employee.tasks[taskIndex].active = false;
        employee.tasks[taskIndex].completed = true;
        
        employee.taskCounts.active = employee.taskCounts.active - 1;
        employee.taskCounts.completed = employee.taskCounts.completed + 1;

        setUserData({...userData, employees: employeesData});
        localStorage.setItem('employees', JSON.stringify(employeesData));
    }

    const handleFailedTask = () => {
        const employeesData = [...userData.employees];
        const employeeIndex = employeesData.findIndex(e => e.firstName === firstName);
        if(employeeIndex === -1) return;
        
        const employee = employeesData[employeeIndex];
        const taskIndex = employee.tasks.findIndex(t => t.taskTitle === data.taskTitle && t.taskDate === data.taskDate);
        if(taskIndex === -1) return;
        
        employee.tasks[taskIndex].active = false;
        employee.tasks[taskIndex].failed = true;
        
        employee.taskCounts.active = employee.taskCounts.active - 1;
        employee.taskCounts.failed = employee.taskCounts.failed + 1;

        setUserData({...userData, employees: employeesData});
        localStorage.setItem('employees', JSON.stringify(employeesData));
    }

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between'>
        <div>
            <div className='flex justify-between items-center text-white'>
                <h3 className='bg-red-600/80 text-xs px-3 py-1 rounded shadow-sm font-semibold uppercase tracking-wider'>{data.category}</h3>
                <h4 className='text-sm font-medium'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold text-white tracking-tight leading-tight'>{data.taskTitle}</h2>
            <p className='text-sm mt-3 text-white/90 leading-relaxed font-medium'>
                {data.taskDescription}
            </p>
        </div>
        <div className='flex justify-between mt-6 gap-2'>
            <button onClick={handleCompleteTask} className='w-full bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-2 rounded-lg font-bold transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-red-400'>
                Mark as Completed
            </button>
            <button onClick={handleFailedTask} className='w-full bg-rose-600 hover:bg-rose-700 text-white text-xs py-2 px-2 rounded-lg font-bold transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-red-400'>
                Mark as Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask