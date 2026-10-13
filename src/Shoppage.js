import React from 'react';
import './Shoppage.css';

function Shoppage() {
  const handleStartShopping = () => {
    console.log("Navigating to shop products pipeline...");
    alert("Welcome to ShopEasy! Loading categories...");
  };

  return (
    <div className="hero-gradient-wrapper">
      <div className="hero-content-box">
        
        {/* Main Heading Row with shopping bag graphics container */}
        <h1 className="hero-title">
          Welcome to ShopEasy 
          <span className="shopping-icon-span" role="img" aria-label="shopping bags">🛍️</span>
        </h1>
        
        {/* Subtitle Description */}
        <p className="hero-subtitle">
          Your one-stop shopping destination!
        </p>
        
        {/* Interactive Action Button */}
        <button 
          type="button" 
          className="start-shopping-btn" 
          onClick={handleStartShopping}
        >
          Start Shopping
        </button>

      </div>
    </div>
  );
}
export default Shoppage
