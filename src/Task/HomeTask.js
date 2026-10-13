import React from 'react'


function HomeTask() {
  return (
    <center>
    <div className="container">
      <h1>Welcome to My Portfolio</h1>

      <h3>Aspiring Full Stack Developer</h3>

      <p>
        Hello! I am a student learning React and MERN Stack development.
      </p>

      <h3 className="profile-title">My Profile</h3>

      <div className="profile-card">
        <p>Email: Sakthivel.ts26@gmail.com</p>
        <p>University: Muthayammal Engineering College</p>
      </div>

      <p className="footer">
        Explore my skills and projects using the navigation menu.
      </p>
    

    </div>
    </center>
  )
}

export default HomeTask

// import React, { useState, useEffect } from 'react';
// import './StockTicker.css';

// export default function StockTicker() {
//   // 1. Initialise the list of stocks with standard base prices
//   const [stocks, setStocks] = useState([
//     { name: 'AAPL (Apple)', price: 175.50 },
//     { name: 'TSLA (Tesla)', price: 180.20 },
//     { name: 'NVDA (NVIDIA)', price: 875.00 }
//   ]);

//   
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStocks((currentStocks) =>
//         currentStocks.map((stock) => {
//           // Generates a minor value shift between -1.00 and +1.00
//           const randomChange = Math.random() * 2 - 1;
//           return {
//             ...stock,
//             price: Number((stock.price + randomChange).toFixed(2))
//           };
//         })
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="ticker-card">
//       <h2>📈 Market Price Ticker</h2>
//       <div className="ticker-rows">
//         {stocks.map((stock) => (
//           <div key={stock.name} className="ticker-row">
//             <span className="stock-title">{stock.name}</span>
//             <span className="stock-value">${stock.price.toFixed(2)}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
