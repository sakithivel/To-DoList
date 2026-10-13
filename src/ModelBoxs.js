import React, { useState } from 'react'

function Modelboxs() {

  const [data,setdata]=useState(
          {name:"thirumaran",age:"19",dept:"IT"}
      );
    const [sum,setsum]=useState(
            {name:"",age:0,dept:""}
        );
        function a(event){
          return(
          setdata({...data, [event.target.name]: event.target.value,[event.target.age]: event.target.value,[event.target.dept]: event.target.value}))
        }
      function submit(event){
        event.preventDefault();
        setsum({...sum, name: data.name, age:data.age, dept:data.dept})
      }
      

      
      return (
        <>
        {/* <h1 className='top'>Modalbox</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <h3>are go next:</h3>
        {Data && <div className='box'>
        <h2>are you sure you want to sleep</h2>
        <p>Lorem ipsum dolor sit amet consectetur cum magni nulla soluta! Velit dolorum libero, aspernatur ut voluptates odio perspiciatis quia.</p>
        <button style={{marginTop:'0px'}} onClick={()=>{setData(false)}}>continue</button></div>}
        <br></br><button onClick={()=>{setData(true)}}>confirm</button> */}
        <div className='boxs'>
            <div style={{textAlign:'right',margin:'10px'}}>
                <p>X</p>
                
            </div>
            
            <h3>Secure all your devices</h3>
            <p>Ensure your mobile phone, laptop, and other devices are protected online.</p>
            <button>Purchase Premium</button>
        </div>
        <form onSubmit={submit}>
        Name:<input onChange={a} name='name'></input>
        Age:<input onChange={a} name='age'></input>
        Dept:<input onChange={a} name='dept'></input>
        <button type="submit">submit</button>
        </form>
        <h1>{sum.name}</h1>
        <h1>{sum.age}</h1>
        <h1>{sum.dept}</h1>
        {/* <h1>{numbers}</h1>
        <h1>{moreNumbers}</h1>
        <h1>{first}</h1>
        <h1>{second}</h1>
        <h1>{theRest}</h1>
        <h1>{profileData.age}</h1>
        <h1>{profileData.username}</h1>
        <h1>{more}</h1>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>dept</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((i)=>{
                        return(
                          <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.profession}</td>
                        </tr>)
                    })}
                </tbody>
            </table> */}
    </>
  )
}

export default Modelboxs
                      //     const numbers = [1, 2];
                      //     const moreNumbers = [...numbers, 3, 4];
                      //     const [first, second, ...theRest] = [10, 20, 30, 40, 50];
                      //     console.log(first);   
                      //     console.log(theRest); 
                      
                      //     const user = { id: 1, username: "coder1", age: 25 };
                      //     const { id, ...profileData } = user;
                      //     console.log(profileData);
                      
                      //     const people = [
                      //   {
                      //     id: 1,
                      //     name: "John Doe",
                      //     age: 28,
                      //     profession: "Software Engineer"
                      //   },
                      //   {
                      //     id: 2,
                      //     name: "Jane Smith",
                      //     age: 34,
                      //     profession: "UX Designer"
                      //   },
                      //   {
                      //     id: 3,
                      //     name: "Alex Jones",
                      //     age: 22,
                      //     profession: "Data Analyst"
                      //   }
                      // ];
                      // const cars = {
                      // nane: "Citreon",
                      // price: "10,00,080",
                      // city: "salen",
                      // color: "black",
                      // model: "2026",
                      // variant: "shine",
                      // capacity: "45L",
                      // suspension: "mac",
                      // sunroof: "yes",
                      // wheelbase: "255m",
                      // wheelsize: "15inch",
                      // dualtone: "yes"}
                      // const { name, price, city, color, ... remains } = cars;
                      // const updatedCars ={
                      // ... cars,
                      // model: "2027"}