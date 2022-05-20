import { useState, useEffect } from 'react'
import { Navigation } from '../landing/navigation'
import { Header } from '../landing/header'
import { Features } from '../landing/features'
import { Footer } from '../landing/footer'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Team} from '../landing/Team';
import {Demo} from '../landing/demo';
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Demo/>
      <Team data={landingPageData.Team} />
      <Footer />
    </div>
  )
}

export default App
