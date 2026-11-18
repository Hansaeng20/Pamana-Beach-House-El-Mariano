import { ArrowUpRight, Car, MapPin, Sunrise } from 'lucide-react'
import Reveal from './Reveal'
import { maps } from '../data/site'

const tips = [
    {
        icon: Car,
        title: 'Around 3 hours from Manila',
        text: 'Take SLEX and STAR Tollway, or go via Tagaytay and Nasugbu for the scenic route. Traffic varies, so plan ahead.',
    },
    {
        icon: Sunrise,
        title: 'Leave early, arrive relaxed',
        text: 'An early start beats the traffic and gets you to the beach in time for a full first day.',
    },
    {
        icon: MapPin,
        title: 'Calatagan, Batangas',
        text: 'Tap below for turn-by-turn directions straight to our gate in Google Maps.',
    },
]

export default function GettingThere() {
    return (
        <section className="bg-[#F7F4EE] px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:gap-20">
                <Reveal className="lg:col-span-5">
                    <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                        Getting Here
                    </p>
                    <h2 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#243D39] md:text-6xl">
                        Closer than
                        <br />
                        <span className="italic text-[#947A60]">you think.</span>
                    </h2>

                    <div className="mt-12 space-y-8">
                        {tips.map((tip) => {
                            const Icon = tip.icon
                            return (
                                <div key={tip.title} className="flex gap-5">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#243D39] text-[#E8D9BF]">
                                        <Icon size={19} strokeWidth={1.5} />
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#243D39]">{tip.title}</h3>
                                        <p className="mt-2 text-[15px] leading-7 text-[#5f625b]">{tip.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <a
                        href={maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-12 inline-flex items-center gap-4 bg-[#243D39] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#947A60]"
                    >
                        Get Directions
                        <ArrowUpRight size={17} />
                    </a>
                </Reveal>

                <Reveal delay={150} className="lg:col-span-7">
                    <div className="relative h-[380px] overflow-hidden shadow-2xl md:h-full md:min-h-[560px]">
                        <iframe
                            title="Map to Pamana Beach House in Calatagan, Batangas"
                            src="https://www.google.com/maps?q=13.8463011,120.700045&z=14&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 h-full w-full border-0 grayscale-[35%] transition-all duration-700 hover:grayscale-0"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
