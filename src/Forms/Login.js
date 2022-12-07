//rfce
import React from 'react'

function Login() {
  return ( // function component
    <div>
    <h3>Login Page</h3>
    <form>
    Username : <input type = "text" placeholder = "Username" /><br>
    Password : <input type = "password" placeholder = "password" /><br>
    <button>Login</button> <br></br>
    </form>
    </div>
  )
}

export default Login