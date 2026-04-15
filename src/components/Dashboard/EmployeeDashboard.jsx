import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'


const EmployeeDashboard = ({data, changeUser}) => {

  const [userData, setUserData] = useContext(AuthContext);
  const employeeData = userData?.employees?.find(e => e.firstName === data.firstName) || data;

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={changeUser} data={employeeData}/>
        <TaskListNumbers data={employeeData}/>
        <TaskList data={employeeData}/>
    </div>
  )
}

export default EmployeeDashboard