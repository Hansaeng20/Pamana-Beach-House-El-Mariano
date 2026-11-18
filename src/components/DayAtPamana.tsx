import { useState } from 'react'
import { Moon, Sun, Sunrise, Sunset } from 'lucide-react'
import Reveal from './Reveal'
import { images } from '../data/site'

const moments = [
    {
        time: '6:00 AM',
        label: 'Morning',
        icon: Sunrise,
        title: 'Coffee by the water',
        text: 'Wake up before everyone else, pad across the cool sand with a warm cup, and watch the bay go from silver to blue. The only sound is the waves.',
        image: images.shore,
        position: 'object-[30%_60%]',
    },
    {
        time: '12:00 NN',
        label: 'Midday',
        icon: Sun,
        title: 'Shade, swims & salu-salo',
        text: 'Paddle out on a kayak, then retreat under the talisay trees for a long, lazy lunch together. The kids nap. The titos tell stories. Nobody checks their email.',
        image: images.courtyard,
        position: 'object-center',
    },
    {
        time: '5:30 PM',
        label: 'Golden Hour',
        icon: Sunset,
        title: 'The main event',
        text: 'Walk the pier to the cabana as the sky turns gold over the bay. This is the moment everyone grabs their phone — and then puts it down to just watch.',
        image: images.sunset,
        position: 'object-center',
    },
    {
        time: '8:00 PM',
        label: 'Evening',
        icon: Moon,
        title: 'Lanterns & laughter',
        text: 'The lanterns come on, the grill gets going, and the stories get longer. Fall asleep to the sound of the sea — and wake up to do it all again.',
        image: images.house,
        position: 'object-[50%_70%]',
    },
]

export default function DayAtPamana() {
    const [active, setActive] = useState(0)
    const moment = moments[active]

    return (
        <section className="bg-[#F7F4EE] px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="mb-12 flex flex-col justify-between gap-8 md:mb-16 lg:flex-row lg:items-end">
                    <div>
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                            A Day at Pamana
                        </p>
                        <h2 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#243D39] md:text-7xl">
                            Picture your
                            <br />
                            <span className="italic text-[#947A60]">perfect day.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-[15px] leading-8 text-[#5f625b]">
                        Tap through the hours and see how a day by the sea
                        unfolds. Spoiler: there's no alarm clock.
                    </p>
                </Reveal>

                <Reveal>
                    <div
                        role="tablist"
                        aria-label="Times of day"
                        className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-4"
                    >
                        {moments.map((m, i) => {
                            const Icon = m.icon
                            const selected = i === active
                            return (
                                <button
                                    key={m.label}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    onClick={() => setActive(i)}
                                    className={`group flex cursor-pointer items-center gap-3 border px-4 py-4 text-left transition-all duration-300 md:px-6 ${selected
                                        ? 'border-[#243D39] bg-[#243D39] text-white shadow-lg'
                                        : 'border-[#243D39]/15 text-[#243D39] hover:border-[#243D39]/50'
                                        }`}
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className={selected ? 'text-[#CBB79A]' : 'text-[#947A60]'}
                                    />
                                    <span>
                                        <span className="block text-[10px] uppercase tracking-[0.2em] opacity-70">
                                            {m.time}
                                        </span>
                                        <span className="block font-serif text-lg md:text-xl">{m.label}</span>
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    <div className="grid overflow-hidden bg-[#243D39] lg:grid-cols-12">
                        <div className="relative h-[320px] overflow-hidden md:h-[480px] lg:col-span-7 lg:h-[560px]">
                            <img
                                key={moment.image}
                                src={moment.image}
                                alt={moment.title}
                                loading="lazy"
                                className={`h-full w-full animate-fade-in object-cover ${moment.position}`}
                            />
                            <span className="absolute left-6 top-6 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#243D39] backdrop-blur">
                                {moment.time}
                            </span>
                        </div>

                        <div
                            key={moment.label}
                            className="flex animate-fade-up flex-col justify-center p-8 text-white md:p-14 lg:col-span-5"
                        >
                            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#CBB79A]">
                                {String(active + 1).padStart(2, '0')} / {moment.label}
                            </p>
                            <h3 className="font-serif text-4xl leading-tight md:text-5xl">{moment.title}</h3>
                            <p className="mt-6 text-[15px] leading-8 text-white/75">{moment.text}</p>

                            <div className="mt-10 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setActive((active - 1 + moments.length) % moments.length)}
                                    className="cursor-pointer border border-white/30 px-5 py-3 text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-white/10"
                                >
                                    ← Earlier
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActive((active + 1) % moments.length)}
                                    className="cursor-pointer bg-[#CBB79A] px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-[#243D39] transition-colors hover:bg-white"
                                >
                                    Later →
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
