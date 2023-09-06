import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ price }) => {
    return ( 
        <div className="navbar">
            <Link to='/main'><button className='nav-btn'>View drinks menu</button></Link>
            <Link to='/myorder'><button className='nav-btn'>Your orders</button></Link>
            <h1 style={{color: 'white'}}>Total: {price} U$D</h1> {/* Moved "Total" to last place */}
        </div>
     );
}
 
export default Navbar;

