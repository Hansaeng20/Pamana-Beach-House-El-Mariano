import { Sailboat, Sun, Sunset, TreePalm, Users, Waves } from 'lucide-react'
import Reveal from './Reveal'

const highlights = [
    {
        icon: Waves,
        title: 'Right on the Beach',
        text: 'Step out the door and your toes are in the sand. Calm, clear water is only a few steps away.',
    },
    {
        icon: Sailboat,
        title: 'Seaside Pier & Cabana',
        text: 'Stroll the pier to the nipa cabana over the water — the best seat for a cold drink and a breeze.',
    },
    {
        icon: Sunset,
        title: 'Unforgettable Sunsets',
        text: 'Every evening the sky turns gold over the bay. Grab your camera, or just sit back and watch.',
    },
    {
        icon: TreePalm,
        title: 'Shaded Garden Grounds',
        text: 'Big talisay trees, a bamboo-lined garden and lantern-lit paths keep things cool all day long.',
    },
    {
        icon: Users,
        title: 'Made for Groups',
        text: 'Room for the whole family or the entire barkada, with spaces to eat, play and celebrate together.',
    },
    {
        icon: Sun,
        title: 'Slow, Easy Days',
        text: 'Kayak in the morning, nap in the afternoon, grill by night. No rush, no crowds — just your people.',
    },
]

export default function Highlights() {
    return (
        <section
            id="highlights"
            className="scroll-mt-16 bg-[#243D39] px-6 py-24 text-[#F7F4EE] md:px-12 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-2 lg:items-end">
                    <div>
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#CBB79A]">
                            02 / Why Guests Love It
                        </p>
                        <h2 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
                            Everything you need
                            <br />
                            <span className="italic text-[#E8D9BF]">for the perfect getaway.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-[15px] leading-8 text-white/70 lg:justify-self-end">
                        Sun, sea, shade and space. We've taken care of the setting —
                        you just bring the people you love and an appetite for good times.
                    </p>
                </Reveal>

                <div className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <Reveal key={item.title} delay={(i % 3) * 120} className="h-full">
                                <div className="group h-full bg-[#243D39] p-8 transition-colors duration-500 hover:bg-[#2c4843] md:p-10">
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#CBB79A]/50 text-[#CBB79A] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#CBB79A] group-hover:text-[#243D39]">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl">{item.title}</h3>
                                    <p className="mt-4 text-[15px] leading-7 text-white/65">{item.text}</p>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
