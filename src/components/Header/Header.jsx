import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut()
        .then(res => {})
        .catch(error => console.log(error.message))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">Sing Up</Link> 
                
                   {
                    user && <> <span className='text-color'>{user.email}</span> <button onClick={handleLogOut}> Log Out </button> </> 
                   }

            </div>
        </nav>
    );
};

export default Header;