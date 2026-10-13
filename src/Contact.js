import {React,useState,useEffect} from 'react'


const Contact = () => {

  const [Count,setCount]=useState(0)
  const btn={
  height: "50px",
  width: "150px",
  padding:"10px"
  }

  // useEffect(() =>{
  //   console.log("useEffect Rendered")
  // },[])
  // useEffect(() =>{
  //   console.log("counter button is pressed")
  // },[Count])
  // useEffect(()=>{
  //   console.log("every time")
  // })
  // useEffect(()=>{
  //   setCount(50)
  // })
  function timeout() {
setTimeout(
  ()=>{
    console.log("sakthivel")
  },1000
);

  }

   function interval() {
setInterval(
  ()=>{
    console.log("sakthivel")
  },
)

  }
  return (
    <div>
      <h1>Count:{Count}</h1>
      <button style={btn}onClick={() => setCount(Count+1)}>Increment</button>
      <button style={btn}onClick={() => setCount(Count-1)}>decrement</button>
      <button style={btn}onClick={() => setCount(0)}>Reset</button>
      <button style={btn}onClick={() => setCount(1-1)}>orter</button>
      <button style={btn}onClick={timeout}>time</button>
      <button style={btn}onClick={interval}>interval</button>
    </div>
  )
}

export default Contact
