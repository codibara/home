import '../../index.css'
import { useSeo } from '../../hooks/useSeo'

import Banner from '../../components/Banner'
import Header from '../../shared/Header/Header'
import About from '../../components/About'
import Works from '../../components/Works'
import Team from '../../components/Team'

export default function App() {
  useSeo({
    title: 'Codibara – Creative Studio',
    description: 'We’re a development team that builds friendly products — just like a capybara, we get along with everyone!'
  })

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