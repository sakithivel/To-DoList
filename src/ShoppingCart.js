import {useState,React} from 'react'
import './App.css'

function ShoppingCart(){
    const [a,seta]=useState(0);
    const [acc,setacc]=useState(false);
    const [accs,setaccs]=useState(false);
    const [col,setcol]=useState(false);
    const [value,setvalue]=useState([
        {id:1,Product:'Mobile',Price:17000},
        {id:2,Product:'Glass',Price:990},
        {id:3,Product:'Laptop',Price:41000},
        {id:4,Product:'table',Price:890},
        {id:5,Product:'bag',Price:700}
    ])
    const filteredValue = value.filter(item => item.Price < 1000);

  return (
    <div style={{background:col?"black":"white",color:col?"white":'black'}}>
        <span className='top'>
            <h1 className='head'>Shopping Card</h1>
            <button style={{background:"aqua",color:'black'}} onClick={()=>setcol(!col)} >{col?'🌙 Dark Mode':'☀️ Light Mode'}</button>
        </span>
        {
            <table>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((i)=>{
                        return(
                            <tr key={i.id}>
                                <td>{i.Product}</td>
                                <td>{i.Price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
           

        }
        <p>{filteredValue.Product}</p>
        <p>quantity {a}</p>
            <button onClick={()=>seta(a-1)}>-</button>
            <button onClick={()=>seta(a+1)}>+</button>
            <div>
                <h3 onClick={()=>setacc(!acc)}>shopping Rules ︾</h3>
                {acc && <>
                    <p>No return policy</p>
                    <p>address compelcery</p>
                    <p>no phone pay</p>
                </>}
            </div>
            <div>
            <button onClick={()=>setaccs(true)}>Remove</button>
            {accs && <>
            <h2>are you sure</h2>
            <p>you want to remove the card</p>
            <button onClick={()=>setaccs(false)}>confirmation</button>
            </>
            }
            </div>

    </div>
  )
}
export default ShoppingCart