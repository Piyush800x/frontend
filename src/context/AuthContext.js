import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) => {
  localStorage.getItem('authTokens')
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null);
  let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')): null);

  const history = useHistory()

  let loginData = async (e) => {
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: "POST", 
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        console.log(data);
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history.push('/')
        }
  }

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    history.push('/')
  }

  let contextData = {
    user: user,
    loginData: loginData,
    logoutUser: logoutUser
  }

  return(
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}