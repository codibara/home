import '../../index.css'

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import logo from '/assets/Codibara-Logo.png';


export default function Header() {
    const location = useLocation();

    useEffect(() => {
        // When location changes, check for hash and scroll to the corresponding element
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);


    return(
        <div className="w-full max-w-[1440px] mx-auto sticky top-0 flex flex-col items-center py-3.5 px-6 md:flex-row md:justify-between z-50">
            <Link to='/'>
                <img className='w-8' src={logo} />
            </Link>
            {location.pathname === "/policy" ? (
                <nav className='flex justify-center gap-16 py-3'>
                    <li className='nav-item'>Privacy Policy</li>
                </nav>
            ) : (
                <nav className='flex justify-center gap-16 py-3'>
                    <li className='nav-item'><Link to="#about">About</Link></li>
                    <li className='nav-item'><Link to="#works">Works</Link></li>
                    <li className='nav-item'><Link to="#team">Team</Link></li>
                </nav>
            )}
        </div>
    )
}