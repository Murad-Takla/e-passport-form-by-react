

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'
import './App.css'

const schema = z.object({
  fullName : z.string().min(2 , { message: "At least 2 character" }).max(30, { message: "Must be 30 or fewer characters long" }),
  firstName : z.string().max(15, { message: "Must be 30 or fewer characters long" }),
  lastName : z.string().max(15, { message: "Must be 30 or fewer characters long" }),
 
 

  religion : z.string().min(2 , { message: "At least 2 character" }).max(30, { message: "Must be 30 or fewer characters long" })  
})

function App() {

 const {register , handleSubmit  , formState : {errors}} = useForm ({
  defaultValues: {
    fullName : "",
    firstName : "",
    lastName : "",
    DOB : "",
    countryName : "",
    district : "",
    maritalStatus: "" ,
    NID : "",
    birthRegistrationNo : "",
    contactNo : "",
    religion : ""

  },
  resolver : zodResolver(schema)
 })

  
  return (
    <>



      <form className='bg-blue-400 max-w-xl mx-auto mt-10 p-4 rounded text-white space-y-6'


     onSubmit={handleSubmit (function (values)
      {
        console.log(values)
      })}

      >

        <h1 className='text-2xl font-bold text-center text underline p-2'>E-passport form</h1>
        <div>

          <label htmlFor='fullName' className='font-bold'>Full Name (as per NID/BRC) : </label>
          <input
            {...register("fullName")}
            id='fullName' name='fullName' type="text" className='rounded px-2 text-blue-800' />
            {errors.fullName && <p className='text-red-800 text-sm'>*{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor='firstName' className='font-bold'>Given Name : </label>
          <input 
          {...register("firstName")}
          id='firstName' name='firstName' type="text" className='rounded px-2 text-blue-800' />
            {errors.firstName && <p className='text-red-800 text-sm'>*{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor='lastName' className='font-bold'>Surname : </label>
          <input 
          {...register("lastName")}
          id='lastName' name='lastName' type="text" className='rounded px-2 text-blue-800' />
           {errors.lastName && <p className='text-red-800 text-sm'>*{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor='DOB' className='font-bold'>Date of Birth : </label>
          <input
          {...register("DOB")}
          id='DOB' name='DOB' type="date" className='rounded px-2 text-blue-800' />
            {errors.DOB && <p className='text-red-800 text-sm'>*{errors.DOB.message}</p>}
        </div>
        <div>
          <label htmlFor='countryName' className='font-bold'>Name of country : </label>
          <input 
          {...register("countryName")}
          id='countryName' name='countryName' type="text" className='rounded px-2 text-blue-800' />
           {errors.countryName && <p className='text-red-800 text-sm'>*{errors.countryName.message}</p>}
        </div>
        <div>
          <label htmlFor="district" className='font-bold '> District of Birth : </label>
          <select 
          {...register("district")}
          id="district" name="district" className='rounded px-2 text-blue-800' >
               {errors.district && <p className='text-red-800 text-sm'>*{errors.district.message}</p>}

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
          <select
          {...register("maritalStatus") }
          id="maritalStatus" name="maritalStatus" className='rounded px-2 text-blue-800' >
       {errors.maritalStatus && <p className='text-red-800 text-sm'>*{errors.maritalStatus.message}</p>}

            <option value="single">SINGLE</option>
            <option value="married">MARRIED</option>
            <option value="widow">WIDOW</option>
            <option value="divorce">DIVORCED</option>

          </select>

        </div>
        <div>
          <label htmlFor='NID' className='font-bold'>National ID No. </label>
          <input 
          {...register("NID" , { required: true })}
          id='NID' name='NID' type="number" className='rounded px-2 text-blue-800' />
             {errors.NID && <p className='text-red-800 text-sm'>*{errors.NID.message}</p>}
        </div>
        <div>
          <label htmlFor='birthRegistrationNo' className='font-bold'>Birth Registration No.  </label>
          <input 
          {...register("birthRegistrationNo" , { required: true })}
          id='birthRegistrationNo' name='birthRegistrationNo' type="number" className='rounded px-2 text-blue-800' />
           {errors.birthRegistrationNo && <p className='text-red-800 text-sm'>*{errors.birthRegistrationNo.message}</p>}
        </div>

        <div>
          <label htmlFor='contactNo' className='font-bold'>Contact No.  </label>
          <input 
          {...register("contactNo" , { required: true })}
          id='contactNo' name='contactNo' type="number" className='rounded px-2 text-blue-800' />
           {errors.contactNo && <p className='text-red-800 text-sm'>*{errors.contactNo.message}</p>}
        </div>
        <div>
          <label htmlFor='religion' className='font-bold'>Religion :   </label>
          <input 
          {...register("religion" , { required: true })}
          id='religion' name='religion' type="text" className='rounded px-2 text-blue-800' />
            {errors.fullName && <p className='text-red-800 text-sm'>*{errors.fullName.message}</p>}
        </div>

        <div className='flex justify-center'>

          <button className='bg-cyan-600 p-2 rounded ' > Submit</button>
        </div>


      </form>



    </>
  )
}

export default App
