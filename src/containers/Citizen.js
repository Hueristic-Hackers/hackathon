import React, { Component } from "react"
import Stats from "../components/Stats"
import NavBar from "../components/NavBar"
import Category from "../components/Category"
import Complaint from "../components/Complaint"
import "./citizen.css"

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
