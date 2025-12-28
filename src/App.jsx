import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sustainability from './components/Sustainability'
import CoreTestingSystems from './components/CoreTestingSystems'
import EnvironmentalServices from './components/EnvironmentalServices'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    // Add Font Awesome
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    document.head.appendChild(link)

    // Scroll effect for header
    const handleScroll = () => {
      const header = document.querySelector('.ct-header')
      if (header) {
        header.style.boxShadow = window.scrollY > 50 
          ? '0 5px 30px rgba(0, 0, 0, 0.1)'
          : '0 2px 20px rgba(0,0,0,0.08)'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Sustainability />
        <CoreTestingSystems />
        <EnvironmentalServices />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App