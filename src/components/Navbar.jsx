import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-orange-900 py-6 ">
            <div className="container mx-auto flex justify-center text-white">
            <ul className="hidden md:flex space-x-4 bg-brown-800">
                <li>
                    <Link to ='/login' className="text-black hover:text-brown-300">Login</Link>
                </li>
                <li>
                    <Link to="/" className="text-black hover:text-brown-300">Home</Link>
                </li>
               
                <li>
                    <Link to='/Books' className="text-black hover:text-brown-300">Books</Link>
                </li>
                <li>
                    <Link to='/readinglist' className="text-black hover:text-brown-300">Reading List</Link>
                </li>
                <li>
                    <Link to='/contact' className="text-black hover:text-brown-300">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;