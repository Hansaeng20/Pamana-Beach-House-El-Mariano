import Reveal from './Reveal'

const occasions = [
    {
        title: 'Family Reunions',
        text: 'Gather every generation under one roof — lola included.',
    },
    {
        title: 'Barkada Trips',
        text: 'Sun all day, stories all night. The group chat will thank you.',
    },
    {
        title: 'Couples\' Escapes',
        text: 'Quiet mornings, long walks and a sunset just for two.',
    },
    {
        title: 'Celebrations',
        text: 'Birthdays, anniversaries, team outings — make it a beach party.',
    },
]

export default function PerfectFor() {
    return (
        <section className="bg-[#F7F4EE] px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="mb-14 text-center md:mb-20">
                    <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                        Perfect For
                    </p>
                    <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.1] tracking-tight text-[#243D39] md:text-7xl">
                        Whatever the reason,
                        <br />
                        <span className="italic text-[#947A60]">there's room for it here.</span>
                    </h2>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {occasions.map((item, i) => (
                        <Reveal key={item.title} delay={i * 100} className="h-full">
                            <div className="group relative h-full overflow-hidden border border-[#243D39]/15 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#243D39] hover:bg-[#243D39] hover:shadow-2xl">
                                <span className="font-serif text-6xl italic text-[#CBB79A]/60 transition-colors group-hover:text-[#CBB79A]">
                                    0{i + 1}
                                </span>
                                <h3 className="mt-8 font-serif text-3xl text-[#243D39] transition-colors group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-[15px] leading-7 text-[#5f625b] transition-colors group-hover:text-white/70">
                                    {item.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
