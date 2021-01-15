import React from "react"

const ComplaintItem = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default ComplaintItem
