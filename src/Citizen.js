import React, { Component } from "react"
import Stats from "./Stats"
import NavBar from "./NavBar"
import "./citizen.css"
import Category from "./Category"
import Complaint from "./Complaint"

class Citizen extends Component {
  render() {
    return (
      <div className="citizen">
        <div className="head">
          <h1 className="title">CITIZEN HOMEPAGE</h1>
          <div className="citi-head">
            <Stats />
            <NavBar />
          </div>
        </div>
        <div className="compplain-section">
          <div className="complain-categories">
            <h2>Categories</h2>
            <Category />
          </div>
          <div className="complaints">
            <h2>Complaints</h2>
            <Complaint />
          </div>
        </div>
      </div>
    )
  }
}

export default Citizen
