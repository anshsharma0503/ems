import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("email is", email)
    console.log("password is", password)
    
    // Optional: Clear form on submit
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-2xl p-16 shadow-lg shadow-emerald-500/20'>
        <form 
        onSubmit={(e) => submitHandler(e)}
        className='flex flex-col items-center justify-center gap-6'>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className='text-black outline-none bg-white border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder:text-gray-400' 
            type="email" 
            placeholder='Email' 
          />
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className='text-black outline-none bg-white border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder:text-gray-400' 
            type="password" 
            placeholder='Password' 
          />
          <button className='mt-2 text-white bg-emerald-600 hover:bg-emerald-700 text-xl py-3 px-8 w-full rounded-full font-semibold transition-all' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login