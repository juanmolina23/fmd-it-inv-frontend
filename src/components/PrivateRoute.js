import React from "react"
import { Route, Redirect } from "react-router-dom"
import Navbar from "./Navbar"

function PrivateRoute(props) {
  const signedIn = true
  const { component: Component, ...rest } = props
  return (
    <>
      <Navbar />
      <Route {...rest}>{signedIn ? <Component /> : <Redirect to='/' />}</Route>
    </>
  )
}

export default PrivateRoute
