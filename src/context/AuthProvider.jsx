import React, { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {                       
        const {employees, admin} = getLocalStorage();
        setUserData({employees, admin});
    }, []);

  return (
    <div>
    <AuthContext.Provider value={[userData, setUserData]}>
        {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider