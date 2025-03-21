import '../../index.css'

import Banner from '../../components/Banner'
import Header from '../../shared/Header/Header'
import About from '../../components/About'
import Works from '../../components/Works'
import Team from '../../components/Team'

export default function App() {

    return (
      <>
        <Banner/>
        <div className='relative overflow-clip'>
          <Header/>
          <About />
          <Works />
          <Team />
        </div>
      </>
    )
  }