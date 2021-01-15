import React, { Component } from "react"
import Stats from "../components/Stats"
import Category from "../components/Category"
import Complaint from "../components/Complaint"
import Login from "../components/Login"
import Logout from "../components/Logout"
import Searchbox from "../components/Searchbox"
import "./citizen.css"

class Citizen extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: "",
      complaints: [
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet, consectet",
        },

        {
          title: "Title 2",
          content: "Lorem ipsum dolor sit amet, consectet",
        },

        {
          title: "Title 3",
          content: "Lorem ipsum dolor sit amet, consectet",
        },
      ],
      categories: [],
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    return (
      <div className="citizen">
        <div className="head">
          <h1 className="title">CITIZEN HOMEPAGE</h1>
          <div className="citi-head">
            <Stats />
            <nav>
              <ul>
                <li>
                  <a className="NavItem" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="NavItem" href="/complaints">
                    My Complaints
                  </a>
                </li>
                <li>
                  <a className="NavItem" href="/new">
                    New Complaint
                  </a>
                </li>
                <li>
                  <Login className="NavItem" />
                </li>
                <li>
                  <Logout className="NavItem" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="compplain-section">
          <div className="complain-categories">
            <h2>Categories</h2>
            <Category />
          </div>
          <div className="complaints">
            <h2>Complaints</h2>
            <Searchbox onSearchChange={this.onSearchChange} />
            <Complaint complaints={this.state.complaints} />
          </div>
        </div>
      </div>
    )
  }
}

export default Citizen
