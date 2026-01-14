import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                
                {/* Authority Header - Linear and bold */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-sm uppercase tracking-[0.4em] text-gray-700 font-bold mb-4">Market Leadership</h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-[#161616] tracking-tight mb-6">
                        #1 Residential Sales Team
                    </h3>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-[#161616]/20"></div>
                        <p className="text-xl uppercase tracking-widest text-gray-700 font-light">Last 5 Consecutive Years</p>
                        <div className="h-px w-12 bg-[#161616]/20"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
                    {/* Image with Architectural Border */}
                    <div className="relative group">
                        <div className="relative z-10 aspect-[4/5] overflow-hidden">
                            <Image
                                src="/marci-metzger.png"
                                alt="Marci Metzger - Pahrump NV Real Estate Broker with 30+ Years Experience"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Abstract background element for depth */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#161616]/10 z-0"></div>
                    </div>

                    {/* Bio Content */}
                    <div className="flex flex-col">
                        <span className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-[0.3em]">Principal Broker</span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#161616] mb-4 tracking-tighter uppercase">
                            Marci Metzger
                        </h1>
                        <p className="text-xl mb-8 text-gray-500 font-medium tracking-wide">Pahrump, Nevada Realtor</p>
                        
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
                            <p>
                                Marci’s career is built on a foundation of mastery. Originally a licensed Broker in Washington State, she has been navigating complex markets since 1995.
                            </p>
                            <p>
                                Specializing in the Greater Seattle Area before bringing her wealth of knowledge to Southern Nevada, she combines decades of technical expertise with an unparalleled local focus on the Pahrump Area.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Refined Blockquote */}
                <div className="mt-32 border-t border-[#161616]/5 pt-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <svg className="w-10 h-10 mx-auto mb-8 text-[#161616]/10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11C3.017 11.5523 2.56928 12 2.017 12H1.017V5H11.017V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
                        </svg>
                        <blockquote className="text-2xl md:text-3xl font-light text-[#161616] leading-snug tracking-tight">
                            "The heart of my business is <span className="font-bold">referrals</span>. I work hard for my clients, and always appreciate when they share my name."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}