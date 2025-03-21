import '../index.css'

import membersWeb from '/assets/members-web.png'

export default function TeamDesktop(){
    return(
        <div className='flex flex-col items-center bg-subcolor-light py-32'>
            <p className='font-noto text-secondary text-[1.8vw] lg:text-2xl mb-9'>Seamless / Social / Like a Capybara.</p>
            <div className='w-11/12 max-w-[1200px]'>
                <img 
                    src={membersWeb}
                    className='w-full mb-5'
                />
                <div className='w-full flex flex-row justify-evenly px-4'>
                    <div className='w-[20%] flex flex-col items-center'>
                        <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Jenna</p>
                        <p className='font-noto text-secondary font-light text-[1.6vw] lg:text-[24px]'>Designer</p>
                    </div>
                    <div className='w-[20%] flex flex-col items-center'>
                        <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Joshua</p>
                        <p className='font-noto text-secondary font-light text-[1.6vw] lg:text-[24px]'>Product Owner</p>
                    </div>
                    <div className='w-[20%] flex flex-col items-center'>
                        <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Tony</p>
                        <p className='font-noto text-secondary font-light text-[1.6vw] lg:text-[24px]'>Back-end</p>
                    </div>
                    <div className='w-[20%] flex flex-col items-center'>
                        <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Soy</p>
                        <p className='font-noto text-secondary font-light text-center text-[1.6vw] lg:text-[24px]'>Project Manager<br></br>
                        & Designer</p>
                    </div>
                    <div className='w-[15%] flex flex-col items-center'>
                        <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Sora</p>
                        <p className='font-noto text-secondary font-light text-[1.6vw] lg:text-[24px]'>Front-end</p>
                    </div>
                </div>
            </div>
        </div>
    )
}