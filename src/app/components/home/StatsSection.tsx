export default function StatsSection() {
    return (
        <section className="bg-[#161616] py-32 border-y border-white/5">
            <div className="container mx-auto px-6">
                
                {/* Statement - Shifted to a more modern, asymmetric layout */}
                <div className="max-w-4xl mb-24">
                    <h2 className="text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase mb-8">Our Legacy</h2>
                    <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.2] tracking-tight">
                        With over 30 years of experience, we don't just <span className="italic font-serif text-gray-400">track the market</span>—we define it. Our clients deserve nothing less than our best, which is why we evolve every year.
                    </h3>
                </div>

                {/* Stats Grid - Using fine borders instead of simple flex gaps */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
                    
                    {/* Stat 01 */}
                    <div className="pt-12 md:pr-12 border-b md:border-b-0 md:border-r border-white/10 transition-colors duration-500 hover:bg-white/[0.02]">
                        <span className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-6 block">Decades of Trust</span>
                        <div className="flex items-baseline">
                            <p className="text-8xl font-bold text-white tracking-tighter">30</p>
                            <p className="text-3xl font-light text-gray-500 ml-2">+</p>
                        </div>
                        <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold mt-6">Years of Expertise</p>
                    </div>

                    {/* Stat 02 */}
                    <div className="pt-12 md:px-12 border-b md:border-b-0 md:border-r border-white/10 transition-colors duration-500 hover:bg-white/[0.02]">
                        <span className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-6 block">Transaction Volume</span>
                        <div className="flex items-baseline">
                            <p className="text-8xl font-bold text-white tracking-tighter">700</p>
                            <p className="text-3xl font-light text-gray-500 ml-2">+</p>
                        </div>
                        <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold mt-6">Total Properties Sold</p>
                    </div>

                    {/* Stat 03 */}
                    <div className="pt-12 md:pl-12 transition-colors duration-500 hover:bg-white/[0.02]">
                        <span className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-6 block">Market Reach</span>
                        <div className="flex items-center gap-3">
                            <p className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                                <span className="text-xl text-gray-500 font-light mr-1">$</span>36K
                                <span className="mx-2 text-gray-700">—</span>
                                <span className="text-xl text-gray-500 font-light mr-1">$</span>775K
                            </p>
                        </div>
                        <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold mt-10">Versatile Price Range Sold</p>
                    </div>

                </div>
            </div>
        </section>
    )
}