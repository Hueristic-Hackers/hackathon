import React from "react"
import NavItem from "./NavItem.js"
const NavBar = () => {
  return (
    <div className="NavBar">
      <NavItem name="Home" link="#" />
      <NavItem name="My Complaints" link="#" />
      <NavItem name="New Complaint" link="#" />
      <NavItem name="Logout" link="#" />
    </div>
  )
}

export default NavBar
