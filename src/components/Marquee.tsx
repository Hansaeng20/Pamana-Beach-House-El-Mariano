const phrases = [
    'Barefoot Mornings',
    'Golden-Hour Sunsets',
    'Kayaks on the Shore',
    'Family Reunions',
    'Barkada Getaways',
    'Pier-Side Afternoons',
    'Starry Nights',
]

export default function Marquee() {
    const row = [...phrases, ...phrases]

    return (
        <div className="overflow-hidden bg-[#243D39] py-5 text-[#E8D9BF]" aria-hidden="true">
            <div className="flex w-max animate-marquee items-center">
                {row.map((phrase, i) => (
                    <span key={i} className="flex items-center">
                        <span className="px-8 font-serif text-xl italic md:text-2xl">{phrase}</span>
                        <span className="text-[#CBB79A]">✦</span>
                    </span>
                ))}
            </div>
        </div>
    )
}
