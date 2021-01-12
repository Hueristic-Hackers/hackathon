import React from "react"
import { Route, Switch } from "react-router-dom"
import Citizen from "./Citizen"

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Citizen} />
        {/* <Route component={Error} /> */}
      </Switch>
    </main>
  )
}

export default App
