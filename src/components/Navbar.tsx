import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { messenger } from '../data/site'

const navigation = [
    { label: 'The Story', href: '#story' },
    { label: 'Experiences', href: '#highlights' },
    { label: 'The Stay', href: '#stay' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book', href: '#book' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    const solid = scrolled && !menuOpen

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid
                ? 'bg-[#F7F4EE]/90 text-[#243D39] shadow-[0_1px_0_rgba(36,61,57,0.08)] backdrop-blur-md'
                : 'bg-transparent text-white'
                }`}
        >
            <nav
                className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-12 lg:px-20 ${solid ? 'py-4' : 'py-7'
                    }`}
            >
                <a href="#home" className="relative z-50 flex flex-col leading-none">
                    <span className="font-serif text-2xl tracking-[0.06em] md:text-[28px]">
                        Pamana <span className="italic opacity-80">|</span> El Mariano
                    </span>
                    <span className="mt-1 text-[9px] uppercase tracking-[0.34em] opacity-80">
                        Beach House · Calatagan
                    </span>
                </a>

                <div className="hidden items-center gap-9 lg:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="group relative text-[11px] uppercase tracking-[0.18em]"
                        >
                            {item.label}
                            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <a
                    href={messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hidden items-center gap-3 px-6 py-3 text-[11px] uppercase tracking-[0.16em] transition-colors lg:flex ${solid
                        ? 'bg-[#243D39] text-white hover:bg-[#947A60]'
                        : 'border border-white/70 hover:bg-white hover:text-[#243D39]'
                        }`}
                >
                    Book Your Stay
                    <ArrowUpRight size={15} />
                </a>

                <button
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`relative z-50 cursor-pointer p-2 lg:hidden ${menuOpen ? 'text-white' : ''}`}
                >
                    {menuOpen ? <X size={27} /> : <Menu size={27} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="fixed inset-0 z-40 flex flex-col justify-center gap-7 bg-[#243D39] px-10 text-white lg:hidden">
                    {navigation.map((item, i) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="animate-fade-up font-serif text-4xl"
                            style={{ animationDelay: `${i * 70}ms` }}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href={messenger}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-3 bg-[#CBB79A] px-7 py-4 text-xs uppercase tracking-widest text-[#243D39]"
                    >
                        Book Your Stay
                        <ArrowUpRight size={15} />
                    </a>
                </div>
            )}
        </header>
    )
}
