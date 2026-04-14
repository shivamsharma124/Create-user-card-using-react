import React, { useState } from 'react'
import Card from "./assets/components/Card";

const App = () => {
      const [username, setusername] = useState("")
    const [userImage, setuserImage] = useState("")
    const [userRole, setuserRole] = useState("")
    const [userDesc, setuserDesc] = useState("")
    const [allUsers, setallUsers] = useState([])
    function removeHandler(id)
    {
      let oldUser=[...allUsers]
      oldUser.splice(id,1)
      setallUsers(oldUser)
    }

  function formsubmitted(e)
  {
    e.preventDefault();
    let oldUsers=[...allUsers]
    oldUsers.push({username,userImage,userRole,userDesc})
    setallUsers(oldUsers)
    console.log(oldUsers)
    console.log("form submitted")
    setusername("")
    setuserImage("")
    setuserDesc("")
    setuserRole("")
  }
  return (
<div className='bg-black text-white h-screen'>

    <form className=' flex flex-wrap ' onSubmit={formsubmitted} >
    <input 
    value={username}
    onChange={(e)=>
      setusername(e.target.value)
    }
    className='text-xl font-semibold border-2 w-[46%] m-2 px-3 py-1' 
    type="text" 
    placeholder='Enter you name' />
    <input 
    value={userImage}
    onChange={(e)=>
      setuserImage(e.target.value)
    }
    className='text-xl font-semibold border-2 w-[46%] m-2 px-3 py-1' 
    type="text" 
    placeholder='Image URL' />
    <input 
    value={userRole}
    onChange={(e)=>
      setuserRole(e.target.value)
    }
    className='text-xl font-semibold border-2 w-[46%] m-2 px-3 py-1' 
    type="text"
     placeholder='Enter Role'/>
    <input 
    value={userDesc}
    onChange={(e)=>
      setuserDesc(e.target.value)
    }
    className='text-xl font-semibold border-2 w-[46%] m-2 px-3 py-1'
     type="text"
      placeholder='Enter Discription' />
    <button className='active:scale-95 w-[92%] text-2xl font-semibold bg-amber-800 m-4 '> create user </button>
  </form>
  <div className='flex flex-wrap gap-4'>
  {  allUsers.map( (elem,idx)=>{
      return <Card  id={idx} username={ elem.username} userImage={elem.userImage} userRole={elem.userRole} userDesc={elem.userDesc} removeUser={removeHandler}/>
    })
  }
   
  </div>
</div>

  )
}

export default App