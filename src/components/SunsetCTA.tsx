import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { images } from '../data/site'

export default function SunsetCTA() {
    return (
        <section className="relative overflow-hidden bg-[#1c2b28] px-6 py-32 text-center text-white md:py-48">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{ backgroundImage: `url(${images.sunset})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c2b28]/60 via-[#1c2b28]/30 to-[#1c2b28]/80" />

            <Reveal className="relative z-10 mx-auto max-w-4xl">
                <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#E8D9BF]">
                    Your Sunset is Waiting
                </p>
                <h2 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-8xl">
                    Trade the traffic
                    <br />
                    <span className="italic text-[#E8D9BF]">for the tide.</span>
                </h2>
                <p className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-white/85 md:text-lg">
                    Weekends fill up fast — especially during summer and the holidays.
                    Message us today and lock in your dates before someone else does.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#plan"
                        className="group inline-flex items-center gap-4 bg-[#CBB79A] px-9 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#243D39] shadow-[0_10px_40px_-10px_rgba(203,183,154,0.8)] transition-colors hover:bg-white"
                    >
                        Book Your Getaway
                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                    <a
                        href="#book"
                        className="inline-flex items-center gap-3 border border-white/60 px-9 py-5 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-white/10"
                    >
                        How Booking Works
                    </a>
                </div>
            </Reveal>
        </section>
    )
}
