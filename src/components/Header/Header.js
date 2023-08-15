import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const { user,handleSingOut} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Product</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid?
                    <button onClick={handleSingOut}>Sing Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;