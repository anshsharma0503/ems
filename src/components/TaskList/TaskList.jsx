import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl hover:shadow-lg transition-shadow duration-300'>
            <div className='flex justify-between items-center text-white'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>Make a YouTube Video</h2>
            <p className='text-sm mt-2 text-white'>
                Create a tutorial on how to build a React dashboard from scratch with Tailwind CSS and Framer Motion.
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl hover:shadow-lg transition-shadow duration-300'>
            <div className='flex justify-between items-center text-white'>
                <h3 className='bg-emerald-600 text-sm px-3 py-1 rounded'>Medium</h3>
                <h4 className='text-sm'>22 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>Design UI/UX</h2>
            <p className='text-sm mt-2 text-white'>
                Design the new user onboarding flow using Figma and share the prototype with the engineering team.
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl hover:shadow-lg transition-shadow duration-300'>
            <div className='flex justify-between items-center text-white'>
                <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>Low</h3>
                <h4 className='text-sm'>24 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>Code Review</h2>
            <p className='text-sm mt-2 text-white'>
                Review the pull requests from junior developers and provide constructive feedback on their React components.
            </p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-amber-400 rounded-xl hover:shadow-lg transition-shadow duration-300'>
            <div className='flex justify-between items-center text-white'>
                <h3 className='bg-amber-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-white'>Database Sync</h2>
            <p className='text-sm mt-2 text-white'>
                Migrate the old cluster to the new database infrastructure without any significant downtime or data loss.
            </p>
        </div>
    </div>
  )
}

export default TaskList