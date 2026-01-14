import Image from "next/image";

export default function ValuePropositionSection() {
  return (
    <section className="py-24 bg-[#F5F5F4]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-700 font-bold mb-4">The Ridge Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#161616] mb-6 tracking-tight uppercase">Why Choose The Ridge Realty Group</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We don't just sell homes—we deliver results that exceed expectations
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Card 1: Sales Performance */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#161616]">
            <Image
              src="/val-prop-1.png"
              alt="Top Pahrump Real Estate Sales Performance - Luxury Property Expert"
              fill
              className="object-cover opacity-70 md:opacity-80 md:group-hover:opacity-50 md:group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent">
              <span className="text-[10px] font-mono tracking-[0.3em] text-gray-300 mb-2 uppercase">Proven Results</span>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">Top Residential Sales</h4>
              
              <div className="space-y-3">
                <p className="text-white text-lg font-bold border-l-2 border-white/30 pl-3">
                  $28.5 Million <span className="text-xs font-normal text-gray-300 block">Closed in 2021</span>
                </p>
                {/* Fixed: Opacity 100 by default, 0 only on md screens and above until hover */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Our team helps nearly 90 families annually. We strive to ensure our best is better every year because our clients deserve excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Sales Strategy */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#161616]">
            <Image
              src="/val-prop-2.png"
              alt="Pahrump Home Selling Strategy - Fast Property Sales"
              fill
              className="object-cover opacity-70 md:opacity-80 md:group-hover:opacity-50 md:group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent">
              <span className="text-[10px] font-mono tracking-[0.3em] text-gray-300 mb-2 uppercase">Seller Strategy</span>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">Don't Just List It...</h4>
              
              <div className="space-y-3">
                <p className="text-white text-lg font-bold border-l-2 border-white/30 pl-3 uppercase">
                  Get it SOLD
                </p>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  We exhaust every avenue to ensure our listings reach every possible buyer, ensuring you receive top dollar for your home.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Buyer Guidance */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#161616]">
            <Image
              src="/val-prop-3.png"
              alt="Expert Pahrump Real Estate Buyer Guidance - Nevada Property Specialist"
              fill
              className="object-cover opacity-70 md:opacity-80 md:group-hover:opacity-50 md:group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent">
              <span className="text-[10px] font-mono tracking-[0.3em] text-gray-300 mb-2 uppercase">Buyer Advocacy</span>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide">Expert Guide to Buyers</h4>
              
              <div className="space-y-3">
                <p className="text-white text-lg font-bold border-l-2 border-white/30 pl-3">
                  Local Pros <span className="text-xs font-normal text-gray-300 block">Contractors on speed dial</span>
                </p>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Market analysis, upgrade lists, and professional guidance. Enjoy having a pro at your service who knows the market like no one else.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}