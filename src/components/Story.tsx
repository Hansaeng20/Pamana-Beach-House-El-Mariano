
import { ArrowUpRight } from 'lucide-react'

export default function Story() {
    return (
        <section
            id="story"
            className="scroll-mt-16 bg-[#F7F4EE] px-6 py-24 md:px-12 md:py-36 lg:px-20"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-16 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#947A60]">
                        01 / Our Story
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#777A72]">
                        Calatagan · Philippines
                    </p>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    <div className="relative pb-14 pr-10">
                        <img
                            src="https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/490242172_1103744411774510_9012697548418171004_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF_Lr_mwCBSJU37NHD2r2fKalnLc8L_T6VqWctzwv9PpSEYb8RdsAbXrvOuASv99ZtsgfhKZbKoyuEpy2poX9I4&_nc_ohc=1IQUmKBYzuIQ7kNvwHgjoHz&_nc_oc=AdoK8U_NCdGWNmu8T-fgzjL8ZkO-VJIa8DHyXR64l4gZNUM-kenMiwy5TBTP3FB03NM&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=K2NVGh3L4MGEAsvAbp6nLQ&_nc_ss=7b2a8&oh=00_AQNnOIYtrhxDFF-maSSRHM9quGtZiAAypnQSVUHVx8ImhA&oe=6AE62F43"
                            alt="Warm coastal accommodation"
                            loading="lazy"
                            className="h-[460px] w-full object-cover md:h-[580px]"
                        />
                        <img
                            src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/482020481_1073221144826837_3865186839742481383_n.jpg?stp=dst-jpg_tt6&cstp=mx1153x2048&ctp=s1153x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFPGnQxYz1ddPY-2X94IgiK0T-jKcuym4LRP6Mpy7KbgvpKP5hFROzJIDjzSRAkCECEYWvp6sEXpQokDLKt0qvF&_nc_ohc=GQxvfcU1w7gQ7kNvwHX0QWy&_nc_oc=AdrsIxc1F_KxQsWULE05ywwh2GP4Q9XJL7tb9LTjhJShCqVeUQ86LiNP85goaJ0eEuI&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=gvS8xU6WMkpVNMAH73JOmw&_nc_ss=7b2a8&oh=00_AQPcczdkRuKktvoqx2Bkud1z27fd1N4OekbO0s-vOg52OQ&oe=6AE63271"
                            alt="Tropical coastal scenery"
                            loading="lazy"
                            className="absolute bottom-0 right-0 h-48 w-40 border-[8px] border-[#F7F4EE] object-cover md:h-64 md:w-52"
                        />
                    </div>

                    <div>
                        <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#947A60]">
                            A Place to Remember
                        </p>

                        <h2 className="font-serif text-5xl leading-[1.15] tracking-tight text-[#243D39] md:text-6xl lg:text-7xl">
                            Where the days
                            <br />
                            feel a little
                            <br />
                            <span className="italic">longer.</span>
                        </h2>

                        <div className="mt-10 max-w-md space-y-6 text-[15px] leading-8 text-[#777A72]">
                            <p>
                                Tucked along the coast of Calatagan, Pamana Beach
                                House is an invitation to slow down, unwind, and
                                reconnect with life's simple pleasures.
                            </p>

                            <p>
                                From peaceful mornings to golden afternoons,
                                discover a coastal escape made for meaningful
                                moments with the people who matter most.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="mt-12 inline-flex items-center gap-5 border-b border-[#243D39] pb-3 text-xs uppercase tracking-[0.2em] text-[#243D39] transition-all hover:gap-8"
                        >
                            Plan Your Escape
                            <ArrowUpRight size={19} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
