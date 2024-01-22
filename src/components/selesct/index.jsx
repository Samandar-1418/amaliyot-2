import React from 'react'

export default function Select({one, two, three, title}) {
  return (
    <select >
      <option  value={title}>{title}</option>
      <option value={one}>{one}</option>
      <option value={two}>{two}</option>
      <option value={three}>{three}</option>
    </select>
  )
}
