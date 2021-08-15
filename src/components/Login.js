import React from "react"
import { Redirect, useHistory } from "react-router-dom"

function Login() {
  const history = useHistory()
  let signedIn = false
  if (signedIn) {
    return <Redirect to='/dashboard' />
  }

  const onLogin = () => {
    signedIn = true
    console.log("login button was clicked.")
    history.push("/dashboard")
  }
  return (
    <div className='flex-column login-container'>
      <div className='login-top-banner flex-row'>
        <img src='../images/fiu-white-logo.png' className='login-fiu-logo' />
        <span className='login-divider'></span>
        <span className='login-logo-header'>Facilities IT Inventory</span>
      </div>
      <div className='flex-column login-wrapper'>
        <div className='login-all-inputs-wrapper flex-column '>
          <div className='login-header-wrapper '>
            <h1>Facilities IT Inventory</h1>
          </div>

          <div className='login-input-wrapper flex-column'>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' id='username' />

            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' />
          </div>

          <button className='login-btn' onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
      <div className='login-fake-footer'>
        <p>© 2002 - 2021 Facilities Administration</p>
      </div>
    </div>
  )
}

export default Login
