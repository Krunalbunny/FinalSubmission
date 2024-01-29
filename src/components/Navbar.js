import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav
      style={{backgroundColor: "#282c34",  height: "40px", position: "fixed", width: "100%", top: 0 }}
      ><div  style={{
        height: "40px",
        display:'flex',
        justifyContent:'space-between'
      }}>
        
        <div style={{display:'flex', gap:"20px",alignItems: "center"}}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white", marginLeft: "10px" }}
        >
          Shop
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
          My cart 
        </Link>
        </div>
        <div style={{ textDecoration: "none",alignItems: "center",marginRight:'20px', marginTop:'7px' }}><button onClick={props.logout} style={{backgroundColor: "pink", fontWeight:'600'}}>Logout</button></div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
