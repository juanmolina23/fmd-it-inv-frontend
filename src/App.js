import React, { useEffect } from "react"
import AddDevice from "./components/AddDevice"
import ViewDevices from "./components/ViewDevices"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import PublicRoute from "./components/PublicRoute"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} path='/' exact />
        <PrivateRoute component={Dashboard} path='/dashboard' />
        <PrivateRoute component={ViewDevices} path='/devices' exact />
        <PrivateRoute component={AddDevice} path='/devices/add' />
      </Switch>
    </Router>
  )
}

export default App
