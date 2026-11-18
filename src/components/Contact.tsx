
import {
    ArrowUpRight,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react'

import {
    FaFacebookF,
    FaInstagram,
} from 'react-icons/fa'

import Reveal from './Reveal'
import { email, facebook, instagram, maps, messenger, phoneDisplay, phoneHref } from '../data/site'

const contactDetails = [
    {
        icon: Mail,
        label: 'Email Us',
        value: email,
        href: `mailto:${email}`,
    },
    {
        icon: Phone,
        label: 'Call Us',
        value: phoneDisplay,
        href: phoneHref,
    },
    {
        icon: FaFacebookF,
        label: 'Message Us on Facebook',
        value: 'Pamana Beach House / El Mariano',
        href: facebook,
    },
    {
        icon: MapPin,
        label: 'Find Us',
        value: 'Calatagan, Batangas, Philippines',
        href: maps,
    },
]

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#243D39] px-6 py-24 text-[#F7F4EE] md:px-12 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#CBB79A]">
                    06 / Get in Touch
                </p>

                <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">
                    <Reveal>
                        <h2 className="font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl">
                            Your next escape
                            <br />
                            <span className="italic text-[#E8D9BF]">starts here.</span>
                        </h2>

                        <p className="mt-8 max-w-md text-[15px] leading-8 text-white/70">
                            Questions about dates, rates or what to bring?
                            We'd love to hear from you. Send a message and
                            we'll help you plan the beach trip everyone will
                            remember.
                        </p>

                        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                            <a
                                href={messenger}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-5 bg-[#CBB79A] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#243D39] transition-colors hover:bg-white"
                            >
                                Message Us Now
                                <ArrowUpRight size={17} />
                            </a>
                            <a
                                href={`mailto:${email}?subject=Pamana%20Beach%20House%20Booking%20Inquiry`}
                                className="inline-flex items-center justify-center gap-5 border border-[#CBB79A] px-7 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#CBB79A] hover:text-[#243D39]"
                            >
                                Email an Inquiry
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={150} className="space-y-9 lg:pt-4">
                        {contactDetails.map((item) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.label}
                                    className="border-b border-white/20 pb-7"
                                >
                                    <div className="mb-3 flex items-center gap-3 text-[#CBB79A]">
                                        <Icon size={17} />
                                        <span className="text-[11px] uppercase tracking-[0.22em]">
                                            {item.label}
                                        </span>
                                    </div>

                                    <a
                                        href={item.href}
                                        target={
                                            item.href.startsWith('https://') ? '_blank' : undefined
                                        }
                                        rel={
                                            item.href.startsWith('https://')
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className="break-words font-serif text-xl transition-colors hover:text-[#CBB79A] md:text-2xl"
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            )
                        })}

                        <div>
                            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#CBB79A]">
                                Follow Our Journey
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Pamana Beach House on Facebook"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                                >
                                    <FaFacebookF size={19} />
                                </a>

                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Pamana Beach House on Instagram"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                                >
                                    <FaInstagram size={19} />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <footer className="mt-24 flex flex-col gap-4 border-t border-white/20 pt-8 text-[11px] uppercase tracking-[0.16em] text-white/50 md:flex-row md:justify-between">
                    <p>© {new Date().getFullYear()} Pamana Beach House | El Mariano</p>
                    <p>Calatagan, Batangas · Philippines</p>
                </footer>
            </div>
        </section>
    )
}
