
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

const contactDetails = [
    {
        icon: Mail,
        label: 'Email Us',
        value: 'pamanabeachhouse@gmail.com',
        href: 'mailto:pamanabeachhouse@gmail.com',
    },
    {
        icon: Phone,
        label: 'Call Us',
        value: '0915 638 0004',
        href: 'tel:+639156380004',
    },
    {
        icon: FaFacebookF,
        label: 'Message Us on Facebook',
        value: 'Pamana Beach House / El Mariano',
        href: 'https://www.facebook.com/PamanaBeachHouse',
    },
    {
        icon: MapPin,
        label: 'Find Us',
        value: 'Calatagan, Batangas, Philippines',
        href: 'https://www.google.com/maps/place/Pamana+Beach+House/@13.8463063,120.6974701,17z/data=!3m1!4b1!4m9!3m8!1s0x33bdbac7e7f7e125:0x64626603bd64d402!5m2!4m1!1i2!8m2!3d13.8463011!4d120.700045!16s%2Fg%2F11c71k2d1_?entry=ttu&g_ep=EgoyMDI2MTAyNS4wIKXMDSoASAFQAw%3D%3D',
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
                    02 / Get in Touch
                </p>

                <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">
                    <div>
                        <h2 className="font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl">
                            Your next escape
                            <br />
                            <span className="italic">starts here.</span>
                        </h2>

                        <p className="mt-8 max-w-md text-[15px] leading-8 text-white/70">
                            Have questions about your stay, availability, or
                            reservations? We'd love to hear from you.
                            Reach out and start planning your coastal getaway.
                        </p>

                        <a
                            href="mailto:pamanabeachhouse@gmail.com?subject=Pamana%20Beach%20House%20Booking%20Inquiry"
                            className="mt-12 inline-flex items-center gap-5 border border-[#CBB79A] px-7 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#CBB79A] hover:text-[#243D39]"
                        >
                            Send an Inquiry
                            <ArrowUpRight size={17} />
                        </a>
                    </div>

                    <div className="space-y-9 lg:pt-4">
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
                                    href="https://www.facebook.com/PamanaBeachHouse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Pamana Beach House on Facebook"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                                >
                                    <FaFacebookF size={19} />
                                </a>

                                <a
                                    href="https://www.instagram.com/pamanabeachhouse/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Pamana Beach House on Instagram"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                                >
                                    <FaInstagram size={19} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 flex flex-col gap-4 border-t border-white/20 pt-8 text-[11px] uppercase tracking-[0.16em] text-white/50 md:flex-row md:justify-between">
                    <p>© {new Date().getFullYear()} Pamana Beach House</p>
                    <p>Calatagan, Batangas · Philippines</p>
                </footer>
            </div>
        </section>
    )
}
