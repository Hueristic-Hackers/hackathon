import React from "react"
import { Route, Switch, Error } from "react-router-dom"
import Citizen from "./Citizen"

function App() {
  return (
    <main>
      <Switch>
        <Route path="/citizen" component={Citizen} />
        <Route component={Error} />
      </Switch>
    </main>
  )
}

export default App
