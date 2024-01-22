import React from 'react'
import Button from '../components/Button'
export default function header() {
  return (
    <nav className=" navbar">
 <ul>
      <li>Vakansiyalar</li>
      <li>Kandidatlar</li>
      <li>Kompaniyalar</li>
      <li>Xizmatlar</li>
      <li>Ta'lim</li>
    </ul>
    <select className='navbar-Select' >
      <option value="uzb">O'zb</option>
      <option value="eng">Eng</option>
      <option value="rus">Rus</option>
    </select>
    <Button text='Boshlash'  />
    </nav>
    
  )
}
