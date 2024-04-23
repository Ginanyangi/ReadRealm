import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-yellow-900 py-5">
            <div className="container mx-auto flex justify items-center text-black">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/Books'>Books</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;