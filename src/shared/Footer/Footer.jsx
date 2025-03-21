import '../../index.css'

import logo from '/assets/Footer-image.png';

export default function Footer(){
    return(
        <div className='bg-secondary px-4'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='hidden md:flex flex-row border-b border-tertiary py-5'>
                    <img 
                        src={logo}
                        className='pt-8'
                    />
                </div>
                <div className='w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-3 font-noto text-subcolor py-5'>
                    <div className='flex flex-col items-center md:items-end gap-3'>
                        <a onClick={() => window.open("/policy", "_blank")}className='underline md:text-xl'>Policy</a>
                        <a className="hover:text-primary md:text-xl" href='mailto:Codibara.info@gmail.com<'>Codibara.info@gmail.com</a>
                    </div>
                    <p className='font-noto text-xs md:-order-1 md:text-xl'>&copy;CodiBara All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}