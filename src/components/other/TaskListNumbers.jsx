import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap mt-10 justify-between gap-5 w-full'>
        <div className='rounded-xl w-full md:w-[45%] lg:w-[22%] py-8 px-9 bg-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white mb-1'>{data?.taskCounts?.newTask || 0}</h2>
            <h3 className='text-xl font-medium text-white'>New Tasks</h3>
        </div>
        <div className='rounded-xl w-full md:w-[45%] lg:w-[22%] py-8 px-9 bg-emerald-500 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white mb-1'>{data?.taskCounts?.completed || 0}</h2>
            <h3 className='text-xl font-medium text-white'>Completed</h3>
        </div>
        <div className='rounded-xl w-full md:w-[45%] lg:w-[22%] py-8 px-9 bg-amber-500 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white mb-1'>{data?.taskCounts?.active || 0}</h2>
            <h3 className='text-xl font-medium text-white'>Active Tasks</h3>
        </div>
        <div className='rounded-xl w-full md:w-[45%] lg:w-[22%] py-8 px-9 bg-red-500 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-4xl font-bold text-white mb-1'>{data?.taskCounts?.failed || 0}</h2>
            <h3 className='text-xl font-medium text-white'>Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers