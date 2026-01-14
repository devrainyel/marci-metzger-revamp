import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#161616]">
      {/* Background Image */}
      <Image
        src="/background.png"
        alt="The Ridge Realty Group Luxury Real Estate"
        fill
        priority
        className="object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center pt-20">
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/90 font-medium border-b border-white/30 pb-2 inline-block mb-8">
          Marci Metzger
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-white mb-8 tracking-tighter uppercase leading-[0.9]">
          The Ridge <br className="md:hidden" /> Realty Group
        </h1>

        <div className="max-w-3xl">
          <p className="text-[10px] md:text-xs text-center text-white/70 uppercase tracking-[0.3em] leading-relaxed">
            Pahrump <span className="mx-2 opacity-30">|</span> 
            Henderson <span className="mx-2 opacity-30">|</span> 
            North Las Vegas <span className="mx-2 opacity-30">|</span> 
            Paradise <span className="mx-2 opacity-30">|</span> 
            Jacksboro
          </p>
        </div>
      </div>

      {/* --- Fixed Scroll Indicator --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pb-8 md:pb-12">
        <span 
          className="text-[9px] uppercase tracking-[0.5em] text-white/90 font-bold"
          style={{ writingMode: 'vertical-lr' }} // Cleanest way to handle vertical text
        >
          Scroll
        </span>
        
        {/* Animated Line */}
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/60 animate-scroll-line"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#161616] pointer-events-none"></div>
    </section>
  );
}