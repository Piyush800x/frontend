import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) => {
  localStorage.getItem('authTokens')
  let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null);
  let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')): null);
  let [loading, setLoading] = useState(true)

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
  // Update token once every 4 mins
  let updateToken = async () => {
    console.log("UPDATE TOKEN CALLED");
    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: "POST", 
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({'refresh': authTokens.refresh})
      })
    let data = await response.json()
    if (response.status === 200)  {
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
    }
    else {
      logoutUser()
    }
  }

  let contextData = {
    user: user,
    loginData: loginData,
    logoutUser: logoutUser
  }

  useEffect(() => {
    let fourMins = 1000 * 60 * 4
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken()
      }
    }, fourMins)
    return () => clearInterval(interval)
  }, [authTokens, loading])

  return(
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}