import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { messenger } from '../data/site'

export default function FloatingBook() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <a
            href={messenger}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us to book your stay"
            className={`fixed bottom-5 right-5 z-30 inline-flex items-center gap-3 rounded-full bg-[#243D39] py-4 pl-5 pr-6 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_15px_40px_-10px_rgba(36,61,57,0.7)] transition-all duration-500 hover:bg-[#947A60] md:bottom-8 md:right-8 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
                }`}
        >
            <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CBB79A] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#CBB79A]" />
            </span>
            <MessageCircle size={17} />
            Book Now
        </a>
    )
}
