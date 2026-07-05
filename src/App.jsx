import { BrowserRouter } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import './App.css'
import { Partners } from './components/layout/Partners'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          
        </main>
        <Partners />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App