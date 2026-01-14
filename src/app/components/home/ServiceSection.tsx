import Image from "next/image";

export default function ServiceSection() {
  const services = [
    {
      number: "01",
      title: "Real Estate Done Right",
      description: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      image: "/services-1.png",
      label: "Consultation & Strategy"
    },
    {
      number: "02",
      title: "Commercial & Residential",
      description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
      image: "/services-2.png",
      label: "Flexibility"
    },
    {
      number: "03",
      title: "Expertise",
      description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      image: "/services-3.png",
      label: "Reliability & Knowledge"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F4]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
         <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-700 font-bold mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#161616] mb-6 tracking-tight uppercase">Our Services</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Solutions tailored to the Pahrump market, backed by 30 years of industry mastery
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Container with Architectural Frame */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#161616]">
                  <Image
                    src={service.image}
                    alt={
                      index === 0 
                        ? "Pahrump NV Residential Real Estate Services - Home Buying Selling"
                        : index === 1 
                        ? "Pahrump NV Commercial Real Estate Services - Business Properties"
                        : "Expert Pahrump Real Estate Guidance - Property Investment Services"
                    }
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                {/* Visual anchor line */}
                <div className={`absolute -bottom-4 ${index % 2 !== 0 ? "-left-4" : "-right-4"} w-24 h-px bg-[#161616]/20 hidden md:block`}></div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-gray-400 tracking-widest">{service.number}</span>
                  <div className="h-px w-8 bg-[#161616]/20"></div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">{service.label}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#161616] mb-6 uppercase tracking-tight">
                  {service.title}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                  {service.description}
                </p>

                <button className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold text-[#161616]">
                  Learn More
                  <span className="w-8 h-px bg-[#161616] group-hover:w-12 transition-all duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}