import '../../index.css'
import awardMark from '/assets/Award-mark.svg';

import { ArrowUpRight, TrophyFill, AwardFill } from 'react-bootstrap-icons';

export default function Card({ image, title, subtitle, description, link, awardName}){
    return(
        <div className='flex flex-row justify-center items-center w-full'>
            <div className='flex flex-col md:flex-row w-full h-full lg:h-[480px] md:w-11/12 max-w-[887px] '>
                <img
                    className='w-full aspect-square object-cover object-top md:w-5/12 lg:w-[350px]' 
                    src={image}
                />
                <div className={`relative flex flex-col fl items-end gap-8 p-12 lg:pt-12 ${link ? 'lg:pb-8' : 'lg:pb-12'} lg:px-14 bg-[#fff] overflow-hidden w-full`}>
                    {awardName && (
                        <div className='absolute top-[26px] right-[46px] flex flex-row justify-center items-center gap-2 py-1 px-2 bg-tertiary rounded-sm'>
                            <TrophyFill size={16} color='rgba(206,91,22,1)'/>
                            <p className='font-medium text-sm text-secondary font-chivo'>{awardName}</p>
                    </div>)
                    }
                    <div className='flex flex-col w-full'>
                        <p className='font-noto font-semibold text-body text-4xl lg:text-7xl py-2 -ml-[1px]'>{title}</p>
                        <p className='font-noto font-normal text-secondary text-base py-2'>{subtitle}</p>
                        
                    </div>
                    <div className='flex flex-col w-full gap-5'>
                        <p className='font-noto text-body font-light text-[15px]'>{description[0]}</p>
                        <div className='border-[1px] border-t border-subcolor-light'></div>
                        <p className='font-noto text-body font-light text-[15px]'>{description[1]}</p>
                        {description[2] && <div className='border-[1px] border-t border-subcolor-light'></div>}
                        <p className='font-noto text-body font-light text-[15px]'>{description[2]}</p>
                    </div>
                    {link && 
                        <a className='text-secondary link-hover' href={link} target="_blank">
                            <div className='inline-flex items-center justify-end p-3 gap-2 border-b border-b-secondary'>
                                <p className='leading-1'>Click to Explore</p>
                                <ArrowUpRight className='chevronRight'/>
                            </div>
                        </a>
                    }
                </div>
                    
            </div>
        </div>

    )
}
