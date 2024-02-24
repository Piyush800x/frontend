import React from 'react'

const AuthContext = () => {
    const user = {
        
    }

    let response = fetch('http://127.0.0.1:8000/api/token/', {
        method: "POST", 
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({user})
    })



  return (
    <div>
      
    </div>
  )
}

export default AuthContext
