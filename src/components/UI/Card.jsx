import '../../index.css'
import awardMark from '/assets/Award-mark.svg';

import { ArrowUpRight} from 'react-bootstrap-icons';

export default function Card({ image, title, subtitle, description, link, award}){
    return(
        <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col md:flex-row w-full h-full md:w-10/12 max-w-[887px]'>
                <img
                    className='w-full aspect-square object-cover object-top md:w-5/12 lg:w-[350px]' 
                    src={image}
                />
                <div className={`relative flex flex-col items-end gap-12 p-12 lg:pt-16 ${link ? 'lg:pb-8' : 'lg:pb-16'} lg:px-14 bg-[#fff] overflow-hidden`}>
                    {award ? (
                        <div className='absolute top-0 right-0'>
                        <div className='w-0 h-0 border-l-[95px] border-t-[95px] border-l-transparent border-t-tertiary'>
                        </div>
                        <img
                            src={awardMark}
                            className='absolute top-4 right-4 w-8 h-8 fill-primary'
                        />
                        
                    </div>
                    ) : ""}
                    <div className='flex flex-col w-full'>
                        <p className='font-noto font-bold text-body text-4xl lg:text-7xl py-2 -ml-[1px]'>{title}</p>
                        <p className='font-noto font-normal text-secondary text-base py-2'>{subtitle}</p>
                        
                    </div>
                    <div className='flex flex-col w-full gap-5'>
                        <p className='font-noto text-body font-light text-[15px]'>{description[0]}</p>
                        <div className='border-[1px] border-t border-subcolor-light'></div>
                        <p className='font-noto text-body font-light text-[15px]'>{description[1]}</p>
                        <div className='border-[1px] border-t border-subcolor-light'></div>
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
