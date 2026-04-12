import React from 'react'

const Header = ({data, changeUser}) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    if (changeUser) {
      changeUser(null);
    } else {
      window.location.reload();
    }
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold text-emerald-500'>{data?.firstName || 'Admin'}</span> 👋</h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1C1C1C]'>
            Log Out
        </button>
    </div>
  )
}

export default Header