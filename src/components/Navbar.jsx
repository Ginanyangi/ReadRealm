import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-yellow-900 py-5 ">
            <div className="container mx-auto flex justify items-center text-black">
            <ul className="hidden md:flex space-x-4 bg-brown-800">
                <li>
                    <Link to="/" className="text-black hover:text-brown-300">Home</Link>
                </li>
                <li>
                    <Link to='/contact' className="text-black hover:text-brown-300">Contact</Link>
                </li>
                <li>
                    <Link to='/Books' className="text-black hover:text-brown-300">Books</Link>
                </li>
                <li>
                    <Link to='/readinglist' className="text-black hover:text-brown-300">Reading List</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;