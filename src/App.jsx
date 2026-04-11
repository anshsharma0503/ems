import React from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  return (
    <>
     {/* <Login /> */}
      <EmployeeDashboard /> 
     {/* <AdminDashboard /> */}
    </>
  )
}

export default App