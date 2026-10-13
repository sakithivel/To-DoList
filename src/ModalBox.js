import {React,useState} from 'react'
import './ModalBox.css'
import Image from "./asset/image 1.jpeg"
import { getValue } from '@testing-library/user-event/dist/utils';
function ModalBox() {

    const [Data,setData]=useState(false);
    const [Value,setValue]=useState();
    const [HandleSubmit,setHandleSubmit]=useState();
        const [Error,setError]=useState();


  

    function ErrorHandling(){
    //   [{nameError:"",
    //   emailError:"",
    //   mobilError:""
    // }]

    function change(event){
      setValue(
        {
          ...Value,
          [event.target.name]: event.target.Value
        }
      )
    }
    function HandleSubmit(event){
      event.prevenDefault();

      if(Value.name ==""){
        setError({
          ...Error,
          nameError: "field is required"
        })
      }else if(Value.name.length<3){
        setError({
          nameError:"less then 3 letters"
        })
      }
      }
    }
    
  return (
    <>

      <div>ModalBox</div>
      {/* <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
       
<div className='Modal'>
     {Data ?<div><span>Are You Continue</span>
      <button onClick={()=> setData(false)}>ok</button>
      </div> :""}
      </div>
      </div> */}

      {/* <div >

      <button onClick={()=> setData(true)}>confirm</button>
      </div> */}
     
      {/* <div className='xbox'>
        
        <button className='xButton'>X</button>
        <img className="imgs"src={Image} width={"100px"}height={"100px"}/>
        <h1>secure all you divices</h1>
        <p>ensure your mobile phone,laptop and other<br/>
        oevices are protected online</p>
        <button className='premium'>purchase premium</button>
       </div> */}

    </>
  )
}

export default ModalBox
