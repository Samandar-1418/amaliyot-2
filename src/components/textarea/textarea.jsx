import React from 'react'

export default function Textarea({value}) {
  return (
    <textarea onChange={(e)=>value(e.target.value)}  rows="4" cols="50" placeholder='Kompaniya haqida izoh qoldiring'>
</textarea>
  )
}
