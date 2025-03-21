import '../index.css'

import CardCarousel from './UI/Carousel'

export default function Works(){
    return(
        <div className='w-full max-w-[1440px] flex flex-col items-center py-20 mx-auto' id='works'>
            <div className='w-full flex flex-col md:flex-row md:justify-between px-2'>
                <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] xl:text-[230px] leading-none tracking-tight'>What</div>
                <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] xl:text-[230px] leading-none tracking-tight text-right md:text-left -my-10 md:my-0'>We</div>
                <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] xl:text-[230px] leading-none tracking-tight'>Did</div>
            </div>
            <div className='w-full flex flex-col  px-4'>
                <CardCarousel />
            </div>
        </div>
    )
}