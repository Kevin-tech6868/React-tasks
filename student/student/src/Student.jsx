import React from 'react'

const Student = (props) => {
  return (
    <div>
      <p>Student: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default Student
