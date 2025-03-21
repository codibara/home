import '../index.css'

import mobileAboutTeam from '/assets/mobile-about-team.png'
import membersWeb from '/assets/members-web.png'

export default function About(){
    return(
        <div className='flex flex-col items-center gap-4 mt-[-110px] md:mt-[-80px] pt-32 md:pt-20 pb-16 bg-tertiary md:px-10' id='about'>
            <div className='w-full max-w-[1440px] hidden md:flex flex-col'>
                <p className='font-chivo text-[200px] text-primary leading-42'>Codi</p>
                <p className='font-chivo text-[200px] text-primary leading-42'>Bara</p>
            </div>
            <div className='w-full max-w-[1440px] flex flex-col md:flex-row items-center md:items-end md:justify-end md:gap-4'>
                <img 
                    className='mb-9 md:hidden'
                    src={mobileAboutTeam}
                />
                <img 
                    className='w-6/12 max-w-[725px] md:order-4 hidden md:block'
                    src={membersWeb}
                />
                <div className='flex flex-col items-center lg:items-start gap-9'>
                    <p className='font-noto text-secondary text-sm md:text-xl w-2/3 max-w-96 md:w-80 lg:w-96'>
                        We’re a development team that builds friendly products — just like a capybara, we get along with everyone!
                    </p>
                    <div className='flex flex-col md:flex-row items-center md:justify-baseline md:items-start gap-3'>
                        <p className='font-chivo text-subcolor text-xs mb-2'>Info</p>
                        <div className='flex flex-col items-center md:items-start justify-between gap-3'>
                            <p className='font-chivo text-secondary text-xs'>North America</p>
                            <p className='font-chivo text-secondary text-xs'>South Korea</p>
                        </div>
                        <div className='flex flex-col items-center md:items-start justify-between gap-3'>
                            <p className='font-chivo text-secondary text-xs'>
                                <a className="hover:text-primary" href='mailto:Codibara.info@gmail.com<'>Codibara.info@gmail.com</a>
                            </p>
                            <p className='font-chivo text-secondary text-xs'>Since 2023</p>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}