import { BrowserRouter } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { NewsSpotlight } from "@/components/layout/Newspotlight"
import { Hero } from "@/components/layout/Hero"
import './App.css'
import { Partners } from './components/layout/Partners'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          <Hero />
          <NewsSpotlight />
        </main>
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App