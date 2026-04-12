import React, { useContext , useEffect , useState} from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {       
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser({email, role: 'admin'});
      localStorage.setItem('loggedInUser', JSON.stringify({email, role: 'admin'}));
    }else if(authData && authData.employees.find((e)=> e.email == email && e.password == password )){
      setUser({email, role: 'employee'});
      localStorage.setItem('loggedInUser', JSON.stringify({email, role: 'employee'}));
    }else{
      alert("Invalid credentials");  
    }
  }

  

  return (
    <>
     {user == null ? <Login handleLogin={handleLogin} /> : user.role == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App