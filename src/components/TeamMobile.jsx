import '../index.css'
import jennaMobile from '/assets/Jenna-mobile.png';
import joshuaMobile from '/assets/Joshua-mobile.png';
import soyMobile from '/assets/Soy-mobile.png';
import soraMobile from '/assets/Sora-mobile.png';
import tonyMobile from '/assets/Tony-mobile.png';


export default function TeamMobile(){
    return(
        <div className='relative flex flex-col items-center'>
            <div className='w-full'>
                <div className='bg-tertiary h-35'></div>
                <div className='bg-primary h-65'></div>
                <div className='bg-tertiary h-118'></div>
                <div className='bg-subcolor h-126'></div>
                <div className='bg-tertiary h-116'></div>
            </div>
            <div className='absolute top-0 w-full max-w-[440px]'>
                <div className='flex flex-row items-center gap-3.5 mt-20 w-full'>
                    <img className='w-54' src={jennaMobile}/>
                    <div>
                        <p className='font-noto font-semibold text-body'>Jenna</p>
                        <p className='font-noto font-light text-body'>Designer</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end gap-3.5 -mt-10 w-full'>
                    <div>
                        <p className='font-noto font-semibold text-body text-right'>Joshua</p>
                        <p className='font-noto font-light text-body'>Product Owner</p>
                    </div>
                    <img className='w-54' src={joshuaMobile}/>
                </div>
                <div className='flex flex-row items-center gap-3.5 -mt-10 w-full'>
                    <img className='w-58' src={soyMobile}/>
                    <div>
                        <p className='font-noto font-semibold text-body'>Soy</p>
                        <p className='font-noto font-light text-body'>Project Manager & Designer</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end gap-3.5 -mt-10 w-full'>
                    <div>
                        <p className='font-noto font-semibold text-body text-right'>Sora</p>
                        <p className='font-noto font-light text-body'>Front-end</p>
                    </div>
                    <img className='w-58' src={soraMobile}/>
                </div>
                <div className='flex flex-row items-center gap-3.5 -mt-10 w-full'>
                    <img className='w-60' src={tonyMobile}/>
                    <div>
                        <p className='font-noto font-semibold text-body'>Tony</p>
                        <p className='font-noto font-light text-body'>Back-end</p>
                    </div>
                </div>
                <div className='flex flex-col items-center font-noto'>
                    <p className='text-primary'>·</p>
                    <p className='text-secondary'>·</p>
                    <p className='text-primary'>·</p>
                    <p className='text-secondary'>Seamless</p>
                    <p className='text-secondary'>Social</p>
                    <p className='text-secondary'>Like a Capybara</p>
                    <p className='text-primary'>·</p>
                    <p className='text-secondary'>·</p>
                    <p className='text-primary'>·</p>
                    <img src={'/assets/members-web.png'}/>
                </div>
            </div>
        </div>
    )
}