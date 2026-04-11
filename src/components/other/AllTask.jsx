import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-[#1f1f1f] p-6 rounded-xl mt-6 shadow-lg border border-gray-800'>
        {/* Header Row */}
        <div className='bg-zinc-800 py-3 px-5 flex justify-between rounded-lg shadow-sm border border-zinc-700/50 mb-4 text-gray-300 font-medium'>
            <h2 className='w-1/4'>Employee Name</h2>
            <h3 className='w-1/4'>Task Title</h3>
            <h4 className='w-1/4 text-center'>Date</h4>
            <h5 className='w-1/4 text-right'>Status</h5>
        </div>

        <div id="tasklist" className='h-[250px] overflow-auto flex flex-col gap-3'>
            {/* Task Row 1 */}
            <div className='bg-[#1c1c1c] py-3 px-5 flex justify-between items-center rounded-lg border border-emerald-500/30 shadow-sm'>
                <h2 className='text-white w-1/4 font-medium'>Ansh Sharma</h2>
                <h3 className='text-gray-300 w-1/4'>Make a UI Design</h3>
                <h4 className='text-gray-400 w-1/4 text-center text-sm'>20 Feb 2024</h4>
                <div className='w-1/4 flex justify-end'>
                    <span className='bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/20'>Completed</span>
                </div>
            </div>

            {/* Task Row 2 */}
            <div className='bg-[#1c1c1c] py-3 px-5 flex justify-between items-center rounded-lg border border-amber-500/30 shadow-sm'>
                <h2 className='text-white w-1/4 font-medium'>John Doe</h2>
                <h3 className='text-gray-300 w-1/4'>Database Migration</h3>
                <h4 className='text-gray-400 w-1/4 text-center text-sm'>26 Feb 2024</h4>
                <div className='w-1/4 flex justify-end'>
                    <span className='bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/20'>Active</span>
                </div>
            </div>

            {/* Task Row 3 */}
            <div className='bg-[#1c1c1c] py-3 px-5 flex justify-between items-center rounded-lg border border-red-500/30 shadow-sm'>
                <h2 className='text-white w-1/4 font-medium'>Sarah Smith</h2>
                <h3 className='text-gray-300 w-1/4'>Fix Auth Bug</h3>
                <h4 className='text-gray-400 w-1/4 text-center text-sm'>18 Feb 2024</h4>
                <div className='w-1/4 flex justify-end'>
                    <span className='bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm font-medium border border-red-500/20'>Failed</span>
                </div>
            </div>
            
            {/* Task Row 4 */}
            <div className='bg-[#1c1c1c] py-3 px-5 flex justify-between items-center rounded-lg border border-blue-500/30 shadow-sm'>
                <h2 className='text-white w-1/4 font-medium'>Alex Johnson</h2>
                <h3 className='text-gray-300 w-1/4'>Update Documentation</h3>
                <h4 className='text-gray-400 w-1/4 text-center text-sm'>28 Feb 2024</h4>
                <div className='w-1/4 flex justify-end'>
                    <span className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20'>New Task</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllTask