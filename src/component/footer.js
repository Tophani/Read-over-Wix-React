import React from "react";
import {Outlet,Link} from 'react-router-dom'
function Footer() {
    // const li ={
    //     className="fs-4"

    // }
  return (
    <div
      style={{
        backgroundColor: "#524A35",
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-evenly',
        color: "#C7C7C7",
        paddingTop:50,
        paddingBottom:50,
      }}
    >
      <div className="w-25">
        <h1
          className="fs-1 fw-bold"
          style={{textDecoration:'underline 10px', }}
        >
          Read Over
        </h1>
        <p className="fs-4 text-break"> © 2023 by Read Over. Proudly created with Wix.com</p>
      </div>

      <ul style={{listStyle:'none'}}>
        <li className="fs-4 "><Link to='/' style={{textDecoration:'none', color:'#C7C7C7'}}>Home</Link> </li> 
        <li className="fs-4"><Link to ='/about' style ={{textDecoration:'none', color:'#C7C7C7'}}>About</Link></li>
        <li className="fs-4"> <Link to='/review' style ={{textDecoration:'none', color:'#C7C7C7'}}>The Review</Link></li>
        <li className="fs-4"><Link to= '/contact' style ={{textDecoration:'none', color:'#C7C7C7'}}>Contact</Link></li>
        </ul>

      <ul style={{listStyle:'none'}}>
        <li className="fs-4 fw-bold"><a href="" style={{textDecoration:'none', color:'#C7C7C7'}}>Facebook</a> </li>
        <li className="fs-4 fw-bold">Twitter</li>
        <li className="fs-4 fw-bold">Instagram</li>
         </ul>

    <Outlet />
    </div>
  );
}
export default Footer;
