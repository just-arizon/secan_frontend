import { useState, useEffect } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Preloader } from "@/components/ui/preloader"
import  ScrollUp  from "@/components/ScrollUp"
import './App.css'

function App() {
    const [appReady, setAppReady] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => setAppReady(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!appReady) {
    return <Preloader />
  }

  return (
    <div className="">
      <Navbar />
      <main>
        <Outlet />
        <ScrollUp />
      </main>
      <Footer />


       {/* Route-transition preloader overlay */}
      {navigation.state === 'loading' && <Preloader overlay />}
    </div>
  )
}

export default App