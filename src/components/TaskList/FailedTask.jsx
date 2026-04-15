import React from 'react'

const FailedTask = ({data}) => {
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
            <button disabled className='w-full bg-rose-600 hover:bg-rose-700 text-white text-xs py-2 px-2 rounded-lg font-bold transition-all duration-200 shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-red-400 cursor-not-allowed'>
                Failed
            </button>
        </div>
    </div>
  )
}

export default FailedTask