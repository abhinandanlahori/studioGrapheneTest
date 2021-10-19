import React from 'react';
import NavBar from './NavBar';

function Navigation() {
  return (
    <div className="navPage">

    <NavBar />

    <img src="../stamp.png" alt="logo" />

      <div className="navText">

        <h2 className="white">THE BEST FOODIE</h2>

        <div>
          <h1 className="white">EXPERIENCE</h1>
        </div>

        <div>
          <h3 className="white">NOW IN LONDON</h3>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default Navigation;