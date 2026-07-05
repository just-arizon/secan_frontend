import { BrowserRouter } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App