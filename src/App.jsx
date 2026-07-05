import { BrowserRouter } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App