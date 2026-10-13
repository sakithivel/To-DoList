import App from "./App";
import { React,useState } from "react";


function Project() {
    // const{status,setStatus}= useState("")

    // const Ctime= new Date().toLocaleTimeString();
    // console.log(Ctime)
    // if(Ctime <= "16:20:00 pm" && status !="red"){
    //     console.log("offline")
    //     setStatus("red")
   

    // const Student=[{
    //     id:1,
    //     name:"sakthi",
    //     dept:"IT",
    //     mark:98,
    //     age:19
    // },
    // {
    //     id:2,
    //     name:"sakthivel",
    //     dept:"AML",
    //     mark:95,
    //     age:25
    // }
    // ]
    // const data = Student.map((data)=>{
    //     return (<>

    //     {data.name}
    //     {data.id}
    //     {data.dept}
    //     {data.mark}
        
    //     </>)
    // })
    //  console.log(data);

    const Numbers=[1,2,3,4,5,6,7];
    console.log("pop",Numbers.pop,Numbers)
    console.log("push",Numbers.push(7),Numbers)
    console.log("shift",Numbers.shift(),Numbers)
    console.log("unshift",Numbers.unshift(0),Numbers)
    const filter =Numbers.filter(
        function(A){
            return A.name >18
        }
        
    )
    console.log(filter);
    const name=["sakthi","lokesh","suriya","kamal","sanjay"]
    const result =name.slice(1,3)
    console.log("result",result,name)
    

    
    return(
        <>
        <div>
{/*          
           /* {<div style={{ width :"100%" , heigth :"100vh", backgroundColor: status}}>
            Hello
            {status}
            <button disabled={status == "red" ? ture : fales}>test</button>
           </div>} */}
           {/* {Student.id}<br />
           {Student.mane}

            {Student.id}<br />
           {Student.mane} */}

           {/* <h1>{data}</h1> */}

           {/* {Student.map((data)=>{
            return [data.name,data.id]
           })} */}

           {/* {Student.filter ((data) =>data.name ==="sakthi")
           .map((d)=>(<h2>{d.name}-{d.dept}</h2>))}

    <table>
    <thead>    
            <th>name</th>
            <th>id</th>
            <th>dept</th>
            <th>mark</th>
    </thead>
        <tbody>
            {Student.map((data)=>{
                return<>
                <tr>
           <td>sakthivel</td>
           <td>1</td>
           <td>IT</td>
           <td>50</td>
        </tr>
        <tr>
           <td>kumar</td>
           <td>2</td>
           <td>AIDS</td>
           <td>90</td>
        </tr>
                </>
            })}
       
        </tbody>
        
    </table> */}
      {/* {Numbers.map(()=>{
        return(
            <>
            {A.name}
            </>
        )
      })} */}
      
             
                 
           </div>
           
        </>

    )

   }
export default Project;