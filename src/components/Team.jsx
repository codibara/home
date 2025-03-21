import '../index.css'
import TeamDesktop from './TeamDesktop'
import TeamMobile from './TeamMobile'

export default function Team(){
    return(
            <div id='team'>
                <div className='md:hidden'>
                    <TeamMobile />
                </div>
                <div className='hidden md:block'>
                    <TeamDesktop />
                </div>
            </div>
    )
}