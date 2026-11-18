import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Phone } from 'lucide-react'
import { images, phoneDisplay, phoneHref } from '../data/site'

const slides = [
    { src: images.shore, word: 'the sea.', position: 'object-[30%_60%]', alt: 'The shoreline and seaside pier at Pamana Beach House' },
    { src: images.sunset, word: 'golden skies.', position: 'object-center', alt: 'Sunset over the bay in Calatagan' },
    { src: images.house, word: 'slow mornings.', position: 'object-[50%_70%]', alt: 'The Pamana beach house under the talisay trees' },
    { src: images.entrance, word: 'pure calm.', position: 'object-[50%_65%]', alt: 'The bamboo-lined entrance to Pamana Beach House' },
]

const quickFacts = [
    { value: 'Beachfront', label: 'Steps from the shore' },
    { value: 'Seaside Pier', label: 'With a nipa cabana' },
    { value: '~3 hrs', label: 'Drive from Manila' },
]

const SLIDE_MS = 6500

export default function Hero() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const timer = window.setTimeout(
            () => setActive((current) => (current + 1) % slides.length),
            SLIDE_MS
        )
        return () => window.clearTimeout(timer)
    }, [active])

    return (
        <section
            id="home"
            className="relative h-svh min-h-[720px] overflow-hidden bg-[#1c2b28] text-white"
        >
            {slides.map((slide, i) => (
                <img
                    key={slide.src}
                    src={slide.src}
                    alt={i === active ? slide.alt : ''}
                    aria-hidden={i !== active}
                    fetchPriority={i === 0 ? 'high' : 'low'}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${slide.position} ${i === active ? 'animate-kenburns opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

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
                        className="animate-fade-up font-serif text-[clamp(3.2rem,8.5vw,9rem)] font-normal leading-[0.98] tracking-[-0.045em]"
                        style={{ animationDelay: '300ms' }}
                    >
                        Wake up to
                        <br />
                        <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
                            <span
                                key={active}
                                className="inline-block animate-word-in italic text-[#E8D9BF]"
                            >
                                {slides[active].word}
                            </span>
                        </span>
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
                            href="#plan"
                            className="group inline-flex items-center justify-center gap-4 bg-[#CBB79A] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#243D39] shadow-[0_10px_40px_-10px_rgba(203,183,154,0.7)] transition-all hover:bg-white"
                        >
                            Plan Your Trip
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
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2" role="tablist" aria-label="Hero photos">
                        {slides.map((slide, i) => (
                            <button
                                key={slide.src}
                                type="button"
                                role="tab"
                                aria-selected={i === active}
                                aria-label={`Show photo ${i + 1}`}
                                onClick={() => setActive(i)}
                                className="relative h-[3px] w-10 cursor-pointer overflow-hidden bg-white/30 md:w-14"
                            >
                                {i === active && (
                                    <span
                                        className="absolute inset-y-0 left-0 bg-white animate-progress"
                                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                    <a
                        href="#story"
                        className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
                    >
                        <ArrowDown size={17} className="animate-float" />
                        Scroll to Explore
                    </a>
                </div>

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
