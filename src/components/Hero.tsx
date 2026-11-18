import { ArrowDown, ArrowUpRight, Phone } from 'lucide-react'
import { images, messenger, phoneDisplay, phoneHref } from '../data/site'

const quickFacts = [
    { value: 'Beachfront', label: 'Steps from the shore' },
    { value: 'Seaside Pier', label: 'With a nipa cabana' },
    { value: '~3 hrs', label: 'Drive from Manila' },
]

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-svh min-h-[720px] overflow-hidden bg-[#1c2b28] text-white"
        >
            <img
                src={images.shore}
                alt="The shoreline and seaside pier at Pamana Beach House"
                className="absolute inset-0 h-full w-full animate-kenburns object-cover object-[30%_60%]"
                fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 pt-24 md:px-12 lg:px-20">
                <div className="max-w-5xl">
                    <p
                        className="mb-7 flex animate-fade-up items-center gap-4 text-[10px] font-medium uppercase tracking-[0.35em] md:text-xs"
                        style={{ animationDelay: '150ms' }}
                    >
                        <span className="h-px w-10 bg-[#CBB79A]" />
                        Calatagan, Batangas · Philippines
                    </p>

                    <h1
                        className="animate-fade-up font-serif text-[clamp(3.4rem,9vw,9.5rem)] font-normal leading-[0.95] tracking-[-0.045em]"
                        style={{ animationDelay: '300ms' }}
                    >
                        Wake up to
                        <br />
                        <span className="italic text-[#E8D9BF]">the sea.</span>
                    </h1>

                    <p
                        className="mt-8 max-w-lg animate-fade-up text-[15px] leading-7 text-white/90 md:text-lg md:leading-8"
                        style={{ animationDelay: '500ms' }}
                    >
                        Barefoot mornings, sandy afternoons, and sunsets you'll talk
                        about for years. Your family's beachfront escape in Calatagan
                        is waiting — all you have to do is show up.
                    </p>

                    <div
                        className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center"
                        style={{ animationDelay: '700ms' }}
                    >
                        <a
                            href={messenger}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-4 bg-[#CBB79A] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#243D39] shadow-[0_10px_40px_-10px_rgba(203,183,154,0.7)] transition-all hover:bg-white"
                        >
                            Reserve Your Dates
                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>

                        <a
                            href={phoneHref}
                            className="inline-flex items-center justify-center gap-3 border border-white/60 px-8 py-4 text-xs uppercase tracking-[0.2em] backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <Phone size={15} />
                            Call {phoneDisplay}
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-6 right-6 z-10 flex items-end justify-between gap-6 md:bottom-12 md:left-12 md:right-12 lg:left-20 lg:right-20">
                <a
                    href="#story"
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
                >
                    <ArrowDown size={17} className="animate-float" />
                    Scroll to Explore
                </a>

                <dl className="hidden gap-10 border-l border-white/30 pl-10 md:flex">
                    {quickFacts.map((fact) => (
                        <div key={fact.value}>
                            <dt className="font-serif text-2xl">{fact.value}</dt>
                            <dd className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
                                {fact.label}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
