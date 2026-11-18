import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Highlights from './components/Highlights'
import Stay from './components/Stay'
import PerfectFor from './components/PerfectFor'
import Gallery from './components/Gallery'
import SunsetCTA from './components/SunsetCTA'
import HowToBook from './components/HowToBook'
import Contact from './components/Contact'
import FloatingBook from './components/FloatingBook'

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F7F4EE]">
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <Highlights />
      <Stay />
      <PerfectFor />
      <Gallery />
      <SunsetCTA />
      <HowToBook />
      <Contact />
      <FloatingBook />
    </main>
  )
}

export default App
