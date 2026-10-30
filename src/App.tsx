
import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'

import Story from './components/Story'
import Stay from './components/Stay'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

const facebook = 'https://www.facebook.com/PamanaBeachHouse'

const navigation = [
  { label: 'The Story', href: '#story' },
  { label: 'The Stay', href: '#stay' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Magazine Cover */}
      <section
        id="home"
        className="relative h-svh min-h-[760px] overflow-hidden bg-[#31413c] text-white"
      >
        {/* Temporary hero image */}
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/473885382_1039217924893826_8441223280526017002_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTatYP2Xm4KFqggB-B56QFWA6RX2WyYLFYDpFfZbJgsZonJ1MQUnDyiUG87aKBVlmlfEh3Gl8wdHWepsuye6Cd&_nc_ohc=LQTjYvKr_GkQ7kNvwHRju5N&_nc_oc=Ado_s_4sEqXaxOGtMKdKcO7j015zhMArh8I4V3Y6nF1IVcZs_6iptZ0W3j49x4k-Eos&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=WeIA93U4fx7ZOd1Yg5T9nA&_nc_ss=7b2a8&oh=00_AQMpYT1M-kk1VC6KsO0u5Y5-4iPaDOgew6lHGUS2s8XYEA&oe=6AE62E64')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55" />

        {/* Navigation */}
        <header className="absolute inset-x-0 top-0 z-30">
          <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-7 md:px-12 lg:px-20">
            <a
              href="#home"
              className="relative z-50 flex flex-col leading-none"
            >
              <span className="font-serif text-[30px] tracking-[0.08em]">
                Pamana | ElMariano
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.34em]">
                Beach House
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-9 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-3 border border-white/70 px-6 py-3 text-[11px] uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#243d39] lg:flex"
            >
              Book Your Stay
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 cursor-pointer p-2 lg:hidden"
            >
              {menuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </nav>
        </header>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="absolute inset-0 z-20 flex flex-col justify-center gap-8 bg-[#243d39] px-10 lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl"
              >
                {item.label}
              </a>
            ))}

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-fit border border-white px-6 py-4 text-xs uppercase tracking-widest"
            >
              Book Your Stay
            </a>
          </div>
        )}

        {/* Main headline */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 pt-28 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <p className="mb-8 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.35em] md:text-xs">
              <span className="h-px w-10 bg-white/80" />
              Calatagan, Batangas · Philippines
            </p>

            <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] font-normal leading-[0.95] tracking-[-0.055em]">
              A little closer
              <br />
              <span className="italic">to paradise.</span>
            </h1>

            <div className="mt-9 flex flex-col items-start gap-7 md:mt-12 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-sm leading-7 text-white/90 md:text-base">
                Slow mornings, ocean breezes, and moments worth keeping.
                Your coastal escape awaits at Pamana Beach House.
              </p>

              <a
                href="#story"
                className="group inline-flex items-center gap-6 border-b border-white pb-3 text-xs uppercase tracking-[0.2em]"
              >
                Discover Your Escape
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Magazine footer elements */}
        <div className="absolute bottom-8 left-6 right-6 z-10 flex items-end justify-between md:bottom-12 md:left-12 md:right-12 lg:left-20 lg:right-20">
          <a
            href="#story"
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
          >
            <ArrowDown size={17} />
            Scroll to Explore
          </a>

          <p className="hidden text-[10px] uppercase tracking-[0.24em] md:block">
            The Art of Slowing Down — Vol. 01
          </p>
        </div>
      </section>

      {/* Website sections */}
      <Story />
      <Stay />
      <Gallery />
      <Contact />
    </main>
  )
}

export default App
