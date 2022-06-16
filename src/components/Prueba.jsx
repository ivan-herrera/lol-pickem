import React from 'react'
import { BiSave } from 'react-icons/bi'

function Prueba({data}) {
  return (
    <div>

<p>{data.id}</p>
            <div className='grid gap-2 grid-cols-3 auto-cols-max'>

                <div className='flex items-center place-content-center'>
                    <span className='font-bold text-2xl'>
                        <div className=''>
                            <form  className="grid grid-cols-3 justify-items-center auto-cols-max">
                                <div className='flex'>
                                    <input type='checkbox' name='blue' value='blue' checked={data.blue_win}

                                        className="w-10 h-10 focus:ring-blue-500 hover:shadow-blue-500 shadow-lg rounded checked:bg-gray-500 checked:hover:bg-gray-700 rounded-full"
                                    />
                                </div>
                                <div className='grid justify-items-center'>
                                    <div>VS</div>
                                    <button 
                                        type='submit' 
                                        className='mt-4 flex items-center px-6 py-2 text-sm font-bold text-green-500 transition-colors duration-300 border-2 border-green-400 rounded-full hover:bg-green-500 hover:text-green-100 disabled:opacity-25 disabled:cursor-not-allowed'
                                        
                                    >
                                        <BiSave className='mr-1' /> Guardar
                                    </button>
                                </div>
                                <div>
                                    <input type='checkbox' name="red" value='red' checked={data.red_win}
                                       
                                        className="w-10 h-10 focus:ring-blue-500 hover:shadow-red-500 shadow-lg rounded checked:bg-gray-500 checked:hover:bg-gray-700 rounded-full "
                                    />
                                </div>
                                
                            </form>
                        </div>
                    </span>
                </div>

               
                
            </div>
    </div>
  )
}

export default Prueba