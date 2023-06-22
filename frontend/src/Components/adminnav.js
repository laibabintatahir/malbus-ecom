import React from 'react';
import '../asets/admindashboard.css';
import {useNavigate} from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate('/Components/home');
  }
  const handleAdd=()=>{
    navigate('/Components/adminaddprod');
  }
  const handlecustomer=()=>{
    navigate('/Components/admincustomer');
  }
  return (
    <div className="navbar">
      <div className="logo2-container">
        <img src='../images/Logo.jpg' alt="Logo" className="logo2" />
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item" onClick={handleHome}>Home</li>
          <li className="menu-item" onClick={handleAdd}>Add Product</li>
          <li className="menu-item" onClick={handlecustomer}>View Customers</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
