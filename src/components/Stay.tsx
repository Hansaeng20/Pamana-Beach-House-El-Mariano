import { ArrowUpRight, Check } from 'lucide-react'
import Reveal from './Reveal'
import { images, messenger } from '../data/site'

const features = [
    {
        number: '01',
        eyebrow: 'The Experience',
        title: 'Coastal Living',
        subtitle: 'Your home by the water',
        description:
            'Glass doors open to the sea breeze, stepping stones lead straight to the sand, and the pier is just a short stroll away. This is the beach house you\'ve been daydreaming about at your desk.',
        perks: ['Steps from the shoreline', 'Pier & seaside cabana', 'Shaded beachfront tables'],
        image: images.shore,
        alt: 'Modern beach house with glass doors facing the sea and pier',
    },
    {
        number: '02',
        eyebrow: 'Slow Living',
        title: 'Rest & Unwind',
        subtitle: 'Room to breathe, together',
        description:
            'Wide verandas, a sunny courtyard and cozy, lantern-lit corners — space for kids to run around, titos and titas to chat, and everyone to finally slow down.',
        perks: ['Spacious veranda & courtyard', 'Lantern-lit garden paths', 'Perfect for big groups'],
        image: images.courtyard,
        alt: 'Sunny courtyard with wooden slatted roof and native-style beach house',
    },
]

export default function Stay() {
    return (
        <section
            id="stay"
            className="scroll-mt-16 bg-[#EEEAE2] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="mb-16 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
                    <div>
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                            03 / The Stay
                        </p>
                        <h2 className="font-serif text-6xl leading-[0.98] tracking-tight text-[#243D39] md:text-8xl">
                            Stay a little
                            <br />
                            <span className="italic text-[#947A60]">longer.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-[15px] leading-8 text-[#5f625b]">
                        One night is never quite enough. Come for a quick weekend —
                        and leave already planning your next trip back.
                    </p>
                </Reveal>

                {features.map((item, index) => {
                    const flipped = index % 2 === 1
                    return (
                        <div
                            key={item.number}
                            className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-20 ${index > 0 ? 'mt-24 lg:mt-36' : ''}`}
                        >
                            <Reveal
                                className={`group relative overflow-hidden lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="h-[420px] w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 md:h-[640px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <span className="absolute bottom-6 left-6 text-xs tracking-[0.2em] text-white">
                                    PAMANA / {item.number}
                                </span>
                            </Reveal>

                            <Reveal
                                delay={150}
                                className={`lg:col-span-5 ${flipped ? 'lg:order-1 lg:pl-12' : ''}`}
                            >
                                <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#947A60]">
                                    {item.number} / {item.eyebrow}
                                </p>
                                <h3 className="font-serif text-5xl leading-tight text-[#243D39] md:text-6xl">
                                    {item.title}
                                </h3>
                                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#947A60]">
                                    {item.subtitle}
                                </p>
                                <p className="mt-8 max-w-md text-[15px] leading-8 text-[#5f625b]">
                                    {item.description}
                                </p>

                                <ul className="mt-8 space-y-3">
                                    {item.perks.map((perk) => (
                                        <li key={perk} className="flex items-center gap-3 text-sm text-[#243D39]">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#243D39] text-[#E8D9BF]">
                                                <Check size={13} />
                                            </span>
                                            {perk}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={messenger}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-10 inline-flex items-center gap-5 border-b border-[#243D39] pb-3 text-xs uppercase tracking-[0.2em] text-[#243D39] transition-all hover:gap-8"
                                >
                                    Check Availability
                                    <ArrowUpRight size={18} />
                                </a>
                            </Reveal>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
