import React from "react"

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="search complaints"
        onChange={searchChange}
      />
    </div>
  )
}
export default Searchbox
