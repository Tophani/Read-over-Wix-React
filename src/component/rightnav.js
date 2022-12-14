import React from 'react'
import {Outlet,Link} from 'react-router-dom'

function RightNav() {
    return(
        <div style={{zIndex:10 , backgroundColor:'#F7EAE4',width:'50%'}}>
            <div style={{}}>
                <nav style={{width:'100%',display:'flex', flexDirection:'column',alignItems:'center', }}>
                    <Link to='/' >Home</Link>
                    <Link to='/review'>The Review</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )

    
}
export default RightNav;