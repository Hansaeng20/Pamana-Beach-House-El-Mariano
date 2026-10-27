
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const accommodations = [
    {
        number: '01',
        title: 'Coastal Living',
        subtitle: 'A place to slow down',
        description:
            'Step away from the everyday and enjoy the simple pleasures of life by the sea. A welcoming space for restful mornings and meaningful moments.',
        image:
            'https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/468323371_926331349454716_8452679089656683983_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJqH8IYVru9hQHnWG1xYfKu_p-hMX6nJW7-n6ExfqcldpsxllfxKA2m792IPZwC2RmHL21oTQhTvxY3Ty1ds6W&_nc_ohc=I2aPFs-pP8EQ7kNvwFEHTSB&_nc_oc=Adqdv9lRwEc9vCA0IwquVcQzn5Se7-b22AnqWeyv8kpMIJsk_rq7vw1jM8WfhqyGBTU&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=IAxwr98vKR4HmC6C9xZArw&_nc_ss=7b2a8&oh=00_AQP2wrMpro_Xc04TeFJneCD9BQ6uAn7RxMKPL6o6NGDmXA&oe=6AE627C4',
        alt: 'Warm and inviting coastal accommodation',
    },
    {
        number: '02',
        title: 'Rest & Unwind',
        subtitle: 'Comfort in every moment',
        description:
            'Make yourself at home, settle into a slower rhythm, and spend more time enjoying the company of the people who matter most.',
        image:
            'https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/481080375_1072370951578523_5750683808712902434_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEN6Y47962WidqFsoaGTvCeX2_L33VUlr1fb8vfdVSWvY_V5vppbFBv-jkbhyykyrb1SBfVZ6Q84liGIg814JTM&_nc_ohc=jDT0RD8uIJoQ7kNvwHtPmVs&_nc_oc=Ado-95wtOAw32W_-tfE4qG0xWFus-Xxqt1uTnzJFsxcK1MSvTEtGDiwOz9dPi7H60NE&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=HX30ZLCuxnQJaCtCJx8LGQ&_nc_ss=7b2a8&oh=00_AQNuBZoQtTfM27J_STN9ornjg0vjornJkNa3RPne6h0ixQ&oe=6AE63D37',
        alt: 'Comfortable bedroom with warm natural tones',
    },
]

export default function Stay() {
    return (
        <section
            id="stay"
            className="scroll-mt-16 bg-[#EEEAE2] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">

                {/* Editorial header */}
                <div className="mb-16 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
                    <div>
                        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                            02 / The Stay
                        </p>

                        <h2 className="font-serif text-6xl leading-[0.98] tracking-tight text-[#243D39] md:text-8xl">
                            Stay a little
                            <br />
                            <span className="italic">longer.</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-[15px] leading-8 text-[#777A72]">
                        A coastal escape where time moves differently.
                        Discover the simple beauty of slowing down
                        and making every moment count.
                    </p>
                </div>

                {/* Main accommodation feature */}
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
                    <div className="group relative overflow-hidden lg:col-span-7">
                        <img
                            src={accommodations[0].image}
                            alt={accommodations[0].alt}
                            loading="lazy"
                            className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[650px]"
                        />

                        <span className="absolute bottom-6 left-6 text-xs tracking-[0.2em] text-white">
                            PAMANA / 01
                        </span>
                    </div>

                    <div className="lg:col-span-5">
                        <p className="mb-6 text-xs tracking-[0.25em] text-[#947A60]">
                            {accommodations[0].number} / THE EXPERIENCE
                        </p>

                        <h3 className="font-serif text-5xl leading-tight text-[#243D39] md:text-6xl">
                            {accommodations[0].title}
                        </h3>

                        <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#947A60]">
                            {accommodations[0].subtitle}
                        </p>

                        <p className="mt-9 max-w-md text-[15px] leading-8 text-[#777A72]">
                            {accommodations[0].description}
                        </p>

                        <a
                            href="#contact"
                            className="mt-10 inline-flex items-center gap-5 border-b border-[#243D39] pb-3 text-xs uppercase tracking-[0.2em] text-[#243D39] transition-all hover:gap-8"
                        >
                            Inquire About Your Stay
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                {/* Second accommodation feature */}
                <div className="mt-24 grid items-center gap-12 lg:mt-36 lg:grid-cols-12 lg:gap-20">
                    <div className="order-2 lg:order-1 lg:col-span-5 lg:pl-12">
                        <p className="mb-6 text-xs tracking-[0.25em] text-[#947A60]">
                            {accommodations[1].number} / SLOW LIVING
                        </p>

                        <h3 className="font-serif text-5xl leading-tight text-[#243D39] md:text-6xl">
                            {accommodations[1].title}
                        </h3>

                        <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#947A60]">
                            {accommodations[1].subtitle}
                        </p>

                        <p className="mt-9 max-w-md text-[15px] leading-8 text-[#777A72]">
                            {accommodations[1].description}
                        </p>

                        <a
                            href="#contact"
                            className="mt-10 inline-flex items-center gap-5 border-b border-[#243D39] pb-3 text-xs uppercase tracking-[0.2em] text-[#243D39] transition-all hover:gap-8"
                        >
                            Make an Inquiry
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                    <div className="group order-1 relative overflow-hidden lg:order-2 lg:col-span-7">
                        <img
                            src={accommodations[1].image}
                            alt={accommodations[1].alt}
                            loading="lazy"
                            className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[600px]"
                        />

                        <span className="absolute bottom-6 left-6 text-xs tracking-[0.2em] text-white">
                            PAMANA / 02
                        </span>
                    </div>
                </div>

                {/* Booking strip */}
                <div className="mt-24 flex flex-col justify-between gap-8 border-t border-[#243D39]/20 pt-10 md:flex-row md:items-center lg:mt-36">
                    <p className="font-serif text-2xl italic text-[#243D39] md:text-3xl">
                        Your next favorite memory begins here.
                    </p>

                    <a
                        href="https://www.facebook.com/PamanaBeachHouse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#243D39] hover:opacity-60"
                    >
                        Book Your Stay
                        <ArrowRight size={19} />
                    </a>
                </div>

            </div>
        </section>
    )
}
