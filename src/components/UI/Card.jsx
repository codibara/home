import '../../index.css'

import { ChevronRight, Award } from 'react-bootstrap-icons';

export default function Card({ image, title, description, link, award}){
    return(
        <>
            <img 
                src={image}
            />
            <div>
                <div className='flex flex-row items-center justify-between gap-1'>
                    <div className='flex flex-row items-center'>
                        <p className='font-noto font-semibold text-body text-xl py-2'>{title}</p>
                        {award ? (<Award color='rgba(206,91,22,1)' size={24}/>) : ''}
                    </div>
                    {link && 
                        <a className='w-full text-secondary link-hover' href={link} target="_blank">
                            <div className='flex items-center justify-end py-3'>
                                <p className='leading-1'>Explore</p>
                                <ChevronRight className='chevronRight'/>
                            </div>
                        </a>
                    }
                </div>
                <p className='font-noto text-body font-light text-[15px] max-w-63 h-26'>{description}</p>
            </div>
        </>
    )
}