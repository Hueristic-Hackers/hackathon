import React from "react"
import ComplaintItem from "./ComplaintItem"


const Complaint = ({ complaints }) => {
  return (
    <div>
      {complaints.map((user, i) => {
        return (
          <ComplaintItem
            title={complaints[i].title}
            content={complaints[i].content}
          />
        )
      })}
    </div>
  )
}

export default Complaint
