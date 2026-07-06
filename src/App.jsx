import { BrowserRouter } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { NewsSpotlight } from "@/components/layout/Newspotlight"
import { Hero } from "@/components/layout/Hero"
import { StatsBar } from "@/components/layout/StatsBar"
import './App.css'
import { Partners } from './components/layout/Partners'
import { FeaturedEventBenefits } from './components/layout/FeaturedEventBenefits'
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <FeaturedEventBenefits />
          <NewsSpotlight />
        </main>
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App