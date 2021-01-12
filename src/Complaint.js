import React from "react"
import ComplaintItem from "./ComplaintItem"

const jumbo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo."

const Complaint = () => {
  return (
    <div>
      <ComplaintItem title="Title1" content={jumbo} />
      <ComplaintItem title="Title2" content={jumbo} />
      <ComplaintItem title="Title3" content={jumbo} />
      <ComplaintItem title="Title4" content={jumbo} />
      <ComplaintItem title="Title5" content={jumbo} />
      <ComplaintItem title="Title6" content={jumbo} />
    </div>
  )
}

export default Complaint
