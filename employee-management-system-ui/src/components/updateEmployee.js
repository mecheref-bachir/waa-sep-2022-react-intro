import React from 'react'

const updateEmployee = () => {
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Update Epmloyee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input 
                type="text" 
                className='h-10 w-96 mt-2 px-2 py-2 border'
                name='firstName' 
                value={employee.firstName}
                onChange={(e)=>handleChange(e)}>

                </input>

            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input 
                type="text" 
                className='h-10 w-96 mt-2 px-2 py-2 border'
                name='lastName'
                value={employee.lastName}
                onChange={(e)=>handleChange(e)}>
                
                </input>

            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input 
                type="email" 
                className='h-10 w-96 mt-2 px-2 py-2 border'
                name='emailId'
                value={employee.emailId}
                onChange={(e)=>handleChange(e)}>

                </input>

            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button 
                className='rounded py-2 px-6 font-semibold text-white bg-green-400 hover:bg-green-700 '
                onClick={updateEmployee}>update</button>
                <button 
                className='rounded py-2 px-6 font-semibold text-white bg-red-400 hover:bg-red-700 '
               
                >cancel</button>
              
            </div>
        </div>
    </div>
  )
}

export default updateEmployee