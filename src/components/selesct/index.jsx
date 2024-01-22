import React from 'react'

export default function Select({one, two, three, title}) {
  return (
    <select >
      <option >{title}</option>
      <option>{one}</option>
      <option>{two}</option>
      <option>{three}</option>
    </select>
  )
}
