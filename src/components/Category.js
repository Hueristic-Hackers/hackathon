import React from "react"
import CategoryItem from "./CategoryItem"

const Category = ({ categories }) => {
  return (
    <div>
      {categories.map((name, i) => {
        return <CategoryItem name={categories[i].name} />
      })}
    </div>
  )
}

export default Category
