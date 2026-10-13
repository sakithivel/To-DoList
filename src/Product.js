import React from 'react'
import dragonball from './asset/dragonball.jpg'

import './App.css'

const Product = () => {

    const Productobj=[{
        name:"Dragon ball t-shirt",
        price:"500",
        strikeprice:"899",
        image:{dragonball}
    },
    {
        name:"super dragon",
        price:"1000",
        strikeprice:"2500",
        image:"https://i.pinimg.com/736x/2b/c8/fd/2bc8fd95f01d8f9839a52d1c6d70e265.jpg"
    },
    {
        name:"spical edition",
        price:"2500",
        strikeprice:"2999",
        image:"https://i.pinimg.com/736x/87/d7/c4/87d7c4fb18650685336cb7af97177bc0.jpg"
    }]
  return (
    <div style={{ display: "flex" }}>
            {Productobj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={dragonball} className="imageShoe" />
                           
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikeprice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
  )
}

export default Product
