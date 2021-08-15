import React from "react"
import { Route, Redirect } from "react-router-dom"

function PublicRoute(props) {
  const { component: Component, ...rest } = props
  const signedIn = true
  return (
    <Route {...rest}>{signedIn ? <Component /> : <Redirect to='/' />}</Route>
  )
}

export default PublicRoute
