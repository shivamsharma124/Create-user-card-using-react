import React from 'react'

const Card = (props) => {
  return (
    <div  id={props.id}className='w-64 bg-amber-50 mx-3 rounded-2xl flex justify-centern flex-col items-center py-4 px-1'>
        <img  className=" rounded-full h-24 w-24"src={props.userImage} alt="" />
        <h2 className='text-black text-2xl font-bold mt-3'>{props.username}</h2>
        <h4 className='text-black font-semibold my-3'> {props.userRole}</h4>
        <h6 className='text-black text-sm px-5 mb-4'> {props.userDesc}</h6>
        <button className='rounded-2xl w-18 h-7 bg-red-700 cursor-pointer active:scale-95' 
        onClick={()=>
            {    
                props.removeUser(props.id)                   

            }
        }> Remove</button>
    </div>
  )
}

export default Card