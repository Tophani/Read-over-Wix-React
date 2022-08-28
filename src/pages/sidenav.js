import React from 'react'
import {Outlet,Link} from 'react-router-dom'
function SideNav() {
    return(
        <div>
            <button>X</button>
            <div>
                <img src='' />
                <nav>
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
export default SideNav;