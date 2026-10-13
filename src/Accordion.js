import React, { useState } from "react";
import './App.css'
import './Accordion.css'
 
const Accordion=()=>{
    const [open,setopen]=useState(false);
    // function expand(){
    //     setopen(!open)
    // }
    // const mass=[
    //     {id:1, title:"accordion 1",para:"paragraph 1"},
    //     {id:2, title:"accordion 2",para:"paragraph 2"}
    // ]
    // function handleId(id){
    //     console.log(id)
    //     setopen(id)
    //     setopen(open === id ? null : id)
    // }
    
    return(
        <>

        {/* <p className="head" onClick={expand}>Accordion 1</p>
       {open ? <p>AboutAnimals Usage:Outside Japan, the term refers specifically to animation produced in Japan. Inside Japan, it describes all animated works regardless of origin.</p>:""}
        <p className="head" onClick={expand}>Accordion 2</p>
       {open ? <p>Origin:The word comes from a shortening of the English word "animation".
Usage:Outside Japan, the term refers specifically to animation produced in Japan. Inside Japan, it describes all animated works regardless of origin.
Art Style:Distinctive features often include exaggerated physical features like large eyes, big hair, and dynamic emotional expressions.</p>:""}
         */}
            {/* {
                mass.map((res) => {
                   return(
                      <>
                        <p className="head" onClick={()=> handleId(res.id)}>{res.title}</p>  
                        {res.id}
                        {open === res.id ? <p>{res.para}</p>:""}
                      </>
                    ) 
                })
            } */}

        </>

    )
}

export default Accordion