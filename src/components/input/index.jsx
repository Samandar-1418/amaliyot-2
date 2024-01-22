import React from 'react'

export default function Input({text, type, value}) {
  return (
<input onChange={(e)=>value(e.target.value)} type={type}  placeholder={text} />  )
}
