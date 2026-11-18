import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { images } from '../data/site'

export default function Story() {
    return (
        <section
            id="story"
            className="scroll-mt-16 bg-[#F7F4EE] px-6 py-24 md:px-12 md:py-36 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="mb-16 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#947A60]">
                        01 / Our Story
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#777A72]">
                        Calatagan · Philippines
                    </p>
                </Reveal>

                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    <Reveal className="relative pb-14 pr-10">
                        <div className="overflow-hidden">
                            <img
                                src={images.entrance}
                                alt="The bamboo-lined entrance and Pamana Beach House sign"
                                loading="lazy"
                                className="h-[460px] w-full object-cover transition-transform duration-[1.5s] hover:scale-105 md:h-[600px]"
                            />
                        </div>
                        <img
                            src={images.house}
                            alt="The Pamana beach house with its wooden sign"
                            loading="lazy"
                            className="absolute bottom-0 right-0 h-52 w-44 border-[8px] border-[#F7F4EE] object-cover shadow-xl md:h-72 md:w-56"
                        />                    </Reveal>

                    <Reveal delay={150}>
                        <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                            A Legacy by the Sea
                        </p>

                        <h2 className="font-serif text-5xl leading-[1.1] tracking-tight text-[#243D39] md:text-6xl lg:text-7xl">
                            Where the days
                            <br />
                            feel a little
                            <br />
                            <span className="italic text-[#947A60]">longer.</span>
                        </h2>

                        <div className="mt-10 max-w-md space-y-6 text-[15px] leading-8 text-[#5f625b]">
                            <p>
                                <span className="font-serif text-lg italic text-[#243D39]">Pamana</span>{' '}
                                means heritage — something precious, passed down and
                                shared. That's exactly how this place was built: as a
                                home by the sea for families to gather, again and again.
                            </p>

                            <p>
                                Walk through the bamboo gate, follow the lantern-lit path,
                                and feel the city fall away. Here, the only schedule is
                                the tide — and the only plan is to make memories with the
                                people who matter most.
                            </p>
                        </div>

                        <a
                            href="#stay"
                            className="mt-12 inline-flex items-center gap-5 border-b border-[#243D39] pb-3 text-xs uppercase tracking-[0.2em] text-[#243D39] transition-all hover:gap-8"
                        >
                            See Where You'll Stay
                            <ArrowUpRight size={19} />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
