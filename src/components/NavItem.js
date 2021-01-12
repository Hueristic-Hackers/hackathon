import React from "react"

const NavItem = (props) => {
  return (
    <a className="NavItem" href={props.link}>
      {" "}
      {props.name}{" "}
    </a>
  )
}

export default NavItem
