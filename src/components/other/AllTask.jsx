import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-6 rounded-xl mt-6 shadow-lg border border-gray-800'>
            {/* Header Row */}
            <div className='bg-red-400 py-3 px-5 flex justify-between rounded-lg shadow-sm border border-red-500 mb-4 text-white font-medium'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5 text-center'>New Task</h3>
                <h5 className='w-1/5 text-center'>Active Task</h5>
                <h5 className='w-1/5 text-center'>Completed</h5>
                <h5 className='w-1/5 text-center'>Failed</h5>
            </div>

            <div id="tasklist" className='h-[250px] overflow-auto flex flex-col gap-3'>
                {authData?.employees?.map((elem, idx) => {
                    const borderColors = ['border-emerald-500', 'border-amber-500', 'border-red-500', 'border-blue-500'];
                    const borderColor = borderColors[idx % borderColors.length];
                    
                    return (
                        <div key={idx} className={`bg-[#1f1f1f] py-3 px-5 flex justify-between items-center rounded-lg border-2 ${borderColor} shadow-sm`}>
                            <h2 className='text-white w-1/5 font-medium'>{elem.firstName}</h2>
                            <h3 className='text-blue-400 w-1/5 font-semibold text-center'>{elem.taskCounts.newTask}</h3>
                            <h4 className='text-amber-500 w-1/5 font-semibold text-center'>{elem.taskCounts.active}</h4>
                            <h5 className='text-emerald-500 w-1/5 font-semibold text-center'>{elem.taskCounts.completed}</h5>
                            <h5 className='text-red-500 w-1/5 font-semibold text-center'>{elem.taskCounts.failed}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AllTask