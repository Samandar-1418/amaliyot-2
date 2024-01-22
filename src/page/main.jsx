import React from 'react'
import Input from '../components/input'
import Select from '../components/selesct'
import Textarea from '../components/textarea/textarea'
import Button from '../components/Button'
export default function main() {
  return (
    <main className="main-wrapper">
       <h2>Komponiya ma'lumotlari</h2>
        <p>Komponiya haqidagi ma'lumotlarni kiriting</p>
       <div className="Input-wrappert">
        <label>Kompaniya nomi <span>*</span></label>
       <Input type='text' text='Kompaniya nomi' />
       </div>
       <div className="Input-wrappert">
        <label>Email <span>*</span></label>
       <Input  type='email' text='Email' />
       </div>
       <div className="Number">
  <label>Telefon raqami<span>*</span></label>
 <Select title='Uz +9989'  one='Uz +9989' two='Eng +1264' three='Ru +7' className='select-info'/>
  </div>
       <div className="Select-wrapper">
<div className="country">
<label>Davlat <span>*</span></label>
      <Select title='Davlat'  one='Uzbekistan' two='England' three='Russia'/>
</div>
  <div className="city">
  <label>Shahar<span>*</span></label>
 <Select title='Shahar'  one='Toshkent' two='London' three='Moskow' className='select-info'/>
       </div>
  </div>
  <div className="Input-wrappert">
        <label>Yashash joyi <span>*</span></label>
       <Input  type='text' text='Joy' />
       </div>
  <div className="Jobs">
  <label>Hodimlar soni<span>*</span></label>
 <Select title='Hodimlar soni'  one='100-150' two='200-150' three='300-150' className='select-info'/>
  </div>
  <div className="Input-wrapper">
  <label>Izoh<span>*</span></label>
  <Textarea />
  </div>
  <div className="Button-wrapper">
    <Button text='ORTGA' className='btnOne'/>
    <Button text='KEYINGISI' className='btnTwo'/>
  </div>
    </main>
  )
}

