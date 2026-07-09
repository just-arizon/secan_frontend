import { Outlet } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Preloader } from "@/components/Preloader"
import './App.css'

function App() {
  return (
    <div className="">
      <Preloader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App