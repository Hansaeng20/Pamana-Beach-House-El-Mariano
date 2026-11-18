import { useMemo, useState } from 'react'
import { Check, Copy, Mail, MessageCircle, Minus, Plus } from 'lucide-react'
import Reveal from './Reveal'
import { email, images, messenger } from '../data/site'

const occasions = ['Family Trip', 'Barkada', 'Couple', 'Birthday', 'Reunion', 'Team Outing']

function todayISO() {
    const now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    return now.toISOString().slice(0, 10)
}

function formatDate(iso: string) {
    if (!iso) return ''
    return new Date(`${iso}T00:00:00`).toLocaleDateString('en-PH', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })
}

type StepperProps = {
    label: string
    value: number
    min: number
    max: number
    unit: string
    onChange: (value: number) => void
}

function Stepper({ label, value, min, max, unit, onChange }: StepperProps) {
    return (
        <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#CBB79A]">{label}</p>
            <div className="flex items-center justify-between border border-white/20 px-2 py-2">
                <button
                    type="button"
                    aria-label={`Decrease ${label.toLowerCase()}`}
                    disabled={value <= min}
                    onClick={() => onChange(value - 1)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <Minus size={16} />
                </button>
                <span className="font-serif text-2xl tabular-nums">
                    {value} <span className="text-sm text-white/60">{unit}</span>
                </span>
                <button
                    type="button"
                    aria-label={`Increase ${label.toLowerCase()}`}
                    disabled={value >= max}
                    onClick={() => onChange(value + 1)}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <Plus size={16} />
                </button>
            </div>
        </div>
    )
}

export default function TripPlanner() {
    const [date, setDate] = useState('')
    const [nights, setNights] = useState(2)
    const [guests, setGuests] = useState(6)
    const [occasion, setOccasion] = useState('Family Trip')
    const [copied, setCopied] = useState(false)

    const message = useMemo(() => {
        const when = date ? `arriving ${formatDate(date)}` : 'on dates I\'m still deciding'
        return `Hi Pamana Beach House! I'd like to inquire about a ${nights}-night stay for ${guests} guests, ${when}. It's for a ${occasion.toLowerCase()}. Is it available, and what are your rates? Thank you!`
    }, [date, nights, guests, occasion])

    const messengerLink = `${messenger}?text=${encodeURIComponent(message)}`
    const emailLink = `mailto:${email}?subject=${encodeURIComponent('Booking Inquiry — Pamana Beach House')}&body=${encodeURIComponent(message)}`

    const copyMessage = async () => {
        try {
            await navigator.clipboard.writeText(message)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 2200)
        } catch {
            setCopied(false)
        }
    }

    return (
        <section
            id="plan"
            className="relative scroll-mt-16 overflow-hidden bg-[#1c2b28] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20"
        >
            <img
                src={images.shore}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c2b28] via-[#1c2b28]/95 to-[#243D39]/90" />

            <div className="relative mx-auto max-w-[1400px]">
                <Reveal className="mb-14 max-w-3xl">
                    <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#CBB79A]">
                        Plan Your Trip
                    </p>
                    <h2 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
                        Your getaway,
                        <br />
                        <span className="italic text-[#E8D9BF]">in 30 seconds.</span>
                    </h2>
                    <p className="mt-8 max-w-lg text-[15px] leading-8 text-white/70">
                        Tell us a little about your trip and we'll write the
                        inquiry for you. One tap and it's on its way.
                    </p>
                </Reveal>

                <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="space-y-8 lg:col-span-7">
                        <div>
                            <label
                                htmlFor="trip-date"
                                className="mb-3 block text-[11px] uppercase tracking-[0.2em] text-[#CBB79A]"
                            >
                                Arrival date
                            </label>
                            <input
                                id="trip-date"
                                type="date"
                                min={todayISO()}
                                value={date}
                                onChange={(event) => setDate(event.target.value)}
                                className="w-full border border-white/20 bg-transparent px-4 py-4 font-serif text-xl text-white [color-scheme:dark] focus:border-[#CBB79A] focus:outline-none"
                            />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <Stepper label="Nights" value={nights} min={1} max={14} unit={nights === 1 ? 'night' : 'nights'} onChange={setNights} />
                            <Stepper label="Guests" value={guests} min={1} max={60} unit={guests === 1 ? 'guest' : 'guests'} onChange={setGuests} />
                        </div>

                        <div>
                            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#CBB79A]">
                                What's the occasion?
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {occasions.map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        aria-pressed={occasion === item}
                                        onClick={() => setOccasion(item)}
                                        className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all ${occasion === item
                                            ? 'border-[#CBB79A] bg-[#CBB79A] text-[#243D39]'
                                            : 'border-white/25 text-white/80 hover:border-white/60'
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative bg-[#F7F4EE] p-7 text-[#243D39] shadow-2xl md:p-9">
                            <p className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#947A60]">
                                <MessageCircle size={14} />
                                Your message preview
                            </p>
                            <p
                                aria-live="polite"
                                className="rounded-2xl rounded-tl-sm bg-white p-5 text-[15px] leading-7 shadow-sm"
                            >
                                {message}
                            </p>

                            <div className="mt-7 space-y-3">
                                <a
                                    href={messengerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-3 bg-[#243D39] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#947A60]"
                                >
                                    <MessageCircle size={16} />
                                    Send via Messenger
                                </a>
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href={emailLink}
                                        className="flex items-center justify-center gap-2 border border-[#243D39]/30 px-4 py-3.5 text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-[#243D39]"
                                    >
                                        <Mail size={15} />
                                        Email
                                    </a>
                                    <button
                                        type="button"
                                        onClick={copyMessage}
                                        className="flex cursor-pointer items-center justify-center gap-2 border border-[#243D39]/30 px-4 py-3.5 text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-[#243D39]"
                                    >
                                        {copied ? <Check size={15} /> : <Copy size={15} />}
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
