import '../index.css'
import logo from '/assets/Codibara-Logo.png';

import { ChevronDoubleDown } from 'react-bootstrap-icons';

import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";


export default function Banner(){
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
        <>
         <div className='relative h-svh flex flex-col justify-center items-center'>
            <img
                src={logo}
                className='w-2/12 max-w-[300px] min-w-[200px]'
            />
            <div className='absolute bottom-6 flex flex-col items-center'>
                <Link to='#about'>
                    <p className='font-chivo text-subcolor inline-block mb-4.5 border-b md:text-xl'>Explore</p>
                </Link>
                <Link to='#about' className='animate-bounce'>
                    <ChevronDoubleDown color='rgba(206,91,22,1)' size={24}/>
                </Link>
            </div>
         </div>
        
        </>
    )
}