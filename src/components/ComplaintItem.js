import React from "react"

const ComplaintItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default ComplaintItem
