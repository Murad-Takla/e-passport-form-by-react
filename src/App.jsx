
import { useState } from 'react'
import './App.css'

function App() {


 
  return (
    <>



      <form className='bg-blue-400 max-w-xl mx-auto mt-10 p-4 rounded text-white space-y-6' 
      onSubmit={(e)=>{
        e.defaultPrevented()
        console.log('something is being added')
       
      }}
      >

        <h1 className='text-2xl font-bold text-center text underline p-2'>E-passport form</h1>
        <div>
          <label htmlFor='full-name' className='font-bold'>Full Name (as per NID/BRC) : </label>
          <input id='full-name' name='full-name' type="text" className='rounded px-2 text-blue-800' />
        </div>

        <div>
          <label htmlFor='first-name' className='font-bold'>Given Name : </label>
          <input id='first-name' name='first-name' type="text" className='rounded px-2 text-blue-800' />
        </div>

        <div>
          <label htmlFor='last-name' className='font-bold'>Surname : </label>
          <input id='last-name' name='last-name' type="text" className='rounded px-2 text-blue-800' />
        </div>
        <div>
          <label htmlFor='DOB' className='font-bold'>Date of Birth : </label>
          <input id='DOB' name='DOB' type="date" className='rounded px-2 text-blue-800' />
        </div>
        <div>
          <label htmlFor='country-name' className='font-bold'>Name of country : </label>
          <input id='country-name' name='country-name' type="text" className='rounded px-2 text-blue-800' />
        </div>
        <div>
          <label htmlFor="district" className='font-bold '> District of Birth : </label>
          <select id="district" name="district" className='rounded px-2 text-blue-800' >

            <option value="ctg">CTG</option>
            <option value="dhaka">Dhaka</option>
            <option value="rangpur">Rangpur</option>
            <option value="feni">Feni</option>
            <option value="cumilla">Cumillah</option>
            <option value="sylhet">Sylhet</option>
          </select>

        </div>
        <div>
          <label htmlFor="maritalStatus" className='font-bold '> Marital Status : </label>
          <select id="maritalStatus" name="maritalStatus" className='rounded px-2 text-blue-800' >

            <option value="single">SINGLE</option>
            <option value="married">MARRIED</option>
            <option value="widow">WIDOW</option>
            <option value="divorce">DIVORCED</option>
   
          </select>

        </div>
        <div>
          <label htmlFor='NID' className='font-bold'>National ID No. </label>
          <input id='NID' name='NID' type="number" className='rounded px-2 text-blue-800' />
        </div>
        <div>
          <label htmlFor='birthRegistrationNo' className='font-bold'>Birth Registration No.  </label>
          <input id='birthRegistrationNo' name='birthRegistrationNo' type="number" className='rounded px-2 text-blue-800' />
        </div>

        <div>
          <label htmlFor='contactNo' className='font-bold'>Contact No.  </label>
          <input id='contactNo' name='contactNo' type="text" className='rounded px-2 text-blue-800' />
        </div>
        <div>
          <label htmlFor='religion' className='font-bold'>Religion :   </label>
          <input id='religion' name='religion' type="text" className='rounded px-2 text-blue-800' />
        </div>

        <div className='flex justify-center'>
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
        
        >SUBMIT</button>
        </div>


      </form>



    </>
  )
}

export default App
