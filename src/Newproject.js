import React, { useState } from 'react'

function Newproject({data}){
console.log(data)

const [value,setValue]=useState[{
    name:"",
    email:"",
    nobile:""
}]
  const[error,setError]=useState[{
    nameError:"",
    emailError:"",
    nobileError:""
  }]

  function change(event){
    setValue({
        ...value,
        [event.target.name]: event.target.value
    })
        
  }
    return (
    <>
    <div>
      Hello

    </div>
    </>
  )
}

export default Newproject
