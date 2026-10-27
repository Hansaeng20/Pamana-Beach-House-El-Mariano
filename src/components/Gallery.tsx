
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'

type Category = 'All' | 'Beach House' | 'Interiors' | 'Beach'

type GalleryImage = {
    id: number
    src: string
    title: string
    subtitle: string
    category: Exclude<Category, 'All'>
    layout: string
}

const categories: Category[] = [
    'All',
    'Beach House',
    'Beach',
]

// Temporary images — replace with actual Pamana photos later.
const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: '/images/gallery/beach.jpg',
        title: 'Life by the Sea',
        subtitle: 'The Coastal Experience',
        category: 'Beach',
        layout: 'md:col-span-8',
    },
    {
        id: 2,
        src: '/images/gallery/stay.jpeg',
        title: 'A Place to Stay',
        subtitle: 'The Beach House',
        category: 'Beach House',
        layout: 'md:col-span-4',
    },
    {
        id: 3,
        src: '/images/gallery/bedroom.jpeg',
        title: 'Slow Mornings',
        subtitle: 'The Beach House',
        category: 'Beach House',
        layout: 'md:col-span-4',
    },
    {
        id: 4,
        src: '/images/gallery/nature.jpeg',
        title: 'Natural Beauty',
        subtitle: 'The Surroundings',
        category: 'Beach',
        layout: 'md:col-span-4',
    },
    {
        id: 5,
        src: '/images/gallery/sunset.jpg',
        title: 'Golden Hours',
        subtitle: 'The Experience',
        category: 'Beach',
        layout: 'md:col-span-4',
    },
]

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState<Category>('All')
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const filteredImages = galleryImages.filter(
        (image) =>
            activeCategory === 'All' ||
            image.category === activeCategory
    )

    const selectedImage =
        selectedIndex !== null ? filteredImages[selectedIndex] : null

    useEffect(() => {
        if (selectedIndex === null) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedIndex(null)
            }

            if (event.key === 'ArrowRight') {
                setSelectedIndex((current) =>
                    current === null
                        ? null
                        : (current + 1) % filteredImages.length
                )
            }

            if (event.key === 'ArrowLeft') {
                setSelectedIndex((current) =>
                    current === null
                        ? null
                        : (current - 1 + filteredImages.length) %
                        filteredImages.length
                )
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedIndex, filteredImages.length])

    const nextImage = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current + 1) % filteredImages.length
        )
    }

    const previousImage = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current - 1 + filteredImages.length) %
                filteredImages.length
        )
    }

    return (
        <section
            id="gallery"
            className="scroll-mt-16 bg-[#F7F4EE] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">

                {/* Editorial heading */}
                <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
                    <div>
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                            03 / The Gallery
                        </p>

                        <h2 className="font-serif text-6xl leading-[1] tracking-tight text-[#243D39] md:text-8xl">
                            A glimpse of
                            <br />
                            <span className="italic">paradise.</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-[15px] leading-8 text-[#777A72]">
                        Every corner tells a story. Explore the spaces,
                        scenery, and moments that make a coastal escape
                        so memorable.
                    </p>
                </div>

                {/* Category filters */}
                <div className="mb-10 flex flex-wrap gap-3 border-b border-[#243D39]/15 pb-7">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => {
                                setActiveCategory(category)
                                setSelectedIndex(null)
                            }}
                            className={`cursor-pointer px-5 py-3 text-[11px] uppercase tracking-[0.17em] transition-colors ${activeCategory === category
                                ? 'bg-[#243D39] text-white'
                                : 'text-[#777A72] hover:bg-[#EAE5DB] hover:text-[#243D39]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Photo grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    {filteredImages.map((image, index) => (
                        <button
                            key={image.id}
                            type="button"
                            onClick={() => setSelectedIndex(index)}
                            className={`group relative cursor-pointer overflow-hidden bg-[#EAE5DB] text-left ${image.layout}`}
                            aria-label={`View ${image.title}`}
                        >
                            <div
                                className={`relative ${image.layout === 'md:col-span-8'
                                    ? 'h-[350px] md:h-[560px]'
                                    : 'h-[350px] md:h-[560px]'
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white md:p-8">
                                    <div>
                                        <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/75">
                                            {image.subtitle}
                                        </p>

                                        <h3 className="font-serif text-3xl md:text-4xl">
                                            {image.title}
                                        </h3>
                                    </div>

                                    <ArrowUpRight
                                        size={24}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Closing editorial text */}
                <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-[#243D39]/20 pt-10 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#947A60]">
                            Moments Worth Keeping
                        </p>

                        <h3 className="font-serif text-3xl italic text-[#243D39] md:text-4xl">
                            The best memories aren't planned.
                        </h3>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-4 border-b border-[#243D39] pb-3 text-xs uppercase tracking-[0.2em] text-[#243D39]"
                    >
                        Plan Your Visit
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>

            {/* Fullscreen lightbox */}
            {selectedImage && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo gallery"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#101B19]/95 px-4 py-16"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        type="button"
                        aria-label="Close gallery"
                        onClick={() => setSelectedIndex(null)}
                        className="absolute right-5 top-5 z-20 cursor-pointer p-3 text-white hover:opacity-60 md:right-10 md:top-8"
                    >
                        <X size={28} />
                    </button>

                    <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={(event) => {
                            event.stopPropagation()
                            previousImage()
                        }}
                        className="absolute left-2 z-20 cursor-pointer p-3 text-white hover:opacity-60 md:left-10"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div
                        className="flex max-h-full w-full max-w-6xl flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-h-[72vh] max-w-full object-contain"
                        />

                        <div className="mt-7 text-center text-white">
                            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/55">
                                {selectedIndex! + 1} / {filteredImages.length}
                            </p>

                            <h3 className="font-serif text-3xl md:text-4xl">
                                {selectedImage.title}
                            </h3>
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-label="Next photo"
                        onClick={(event) => {
                            event.stopPropagation()
                            nextImage()
                        }}
                        className="absolute right-2 z-20 cursor-pointer p-3 text-white hover:opacity-60 md:right-10"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            )}
        </section>
    )
}
