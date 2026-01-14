export default function ContactMap() {
  // Exact address for The Ridge Realty Group
  const address = "3190 NV-160 Suite F, Pahrump, NV 89048";
  const encodedAddress = encodeURIComponent(address);
  
  // This URL uses the standard search embed which is free and public
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section className="bg-white border-t border-b border-[#161616]/10">
      <div className="relative w-full h-[500px] bg-gray-100 flex flex-col">
        
        {/* The Map Frame */}
        <iframe
          title="Office Location Map"
          width="100%"
          height="100%"
          className="grayscale contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-1000 ease-in-out"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Mobile-only Address Bar */}
        <div className="lg:hidden bg-[#161616] text-white p-6">
           <p className="text-[10px] tracking-widest uppercase opacity-60 mb-1">Our Address</p>
           <p className="text-sm font-medium">3190 HW-160, Suite F, Pahrump, NV 89048</p>
        </div>
      </div>
    </section>
  );
}