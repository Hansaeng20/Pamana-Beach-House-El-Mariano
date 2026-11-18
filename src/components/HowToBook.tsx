import { CalendarCheck, MessageCircle, Luggage } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
    {
        icon: MessageCircle,
        title: 'Send us a message',
        text: 'Reach out on Facebook Messenger, by phone or email. Tell us your dates and how many are coming.',
    },
    {
        icon: CalendarCheck,
        title: 'Confirm your dates',
        text: 'We\'ll check availability, share the rates and details, and help you secure your reservation.',
    },
    {
        icon: Luggage,
        title: 'Pack & head south',
        text: 'Grab your swimsuit and sunscreen. We\'ll have the beach house ready when you arrive.',
    },
]

export default function HowToBook() {
    return (
        <section
            id="book"
            className="scroll-mt-16 bg-[#EEEAE2] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <Reveal className="mb-16 max-w-3xl md:mb-20">
                    <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                        05 / How to Book
                    </p>
                    <h2 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#243D39] md:text-7xl">
                        Three easy steps
                        <br />
                        <span className="italic text-[#947A60]">to the shore.</span>
                    </h2>
                </Reveal>

                <div className="relative grid gap-12 md:grid-cols-3 md:gap-10">
                    <div className="absolute left-0 right-0 top-8 hidden h-px bg-[#243D39]/20 md:block" />
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <Reveal key={step.title} delay={i * 150} className="relative">
                                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#243D39] text-[#E8D9BF] shadow-lg">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#947A60]">
                                    Step {i + 1}
                                </p>
                                <h3 className="font-serif text-3xl text-[#243D39]">{step.title}</h3>
                                <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#5f625b]">{step.text}</p>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
