import React from 'react';
import {Link} from 'react-router-dom';

const NavComponent = () => {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
        </ul>
        
     );
}
 
export default NavComponent;