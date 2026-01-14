import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa6";
import Image from "next/image";

export default function SocialsSection() {
    const socialLinks = [
        {
            id: "01",
            name: "Facebook",
            icon: <FaFacebookF />,
            desc: "Market updates and community news delivered directly to your feed.",
            action: "Follow Us",
            url: "#"
        },
        {
            id: "02",
            name: "Instagram",
            icon: <FaInstagram />,
            desc: "Virtual tours and professional photography of our stunning listings.",
            action: "View Gallery",
            url: "#"
        },
        {
            id: "03",
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            desc: "Corporate insights and professional real estate networking.",
            action: "Connect",
            url: "#"
        },
        {
            id: "04",
            name: "Yelp",
            icon: <FaYelp />,
            desc: "Read five-star reviews from our property owners and buyers.",
            action: "Read Reviews",
            url: "#"
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                {/* Header - Improved Contrast */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-gray-700 font-bold mb-4">Stay Connected</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-6 tracking-tight uppercase">Our Socials</h3>
                    <p className="text-lg text-gray-800 leading-relaxed font-normal max-w-2xl mx-auto">
                        Follow us for the latest market updates, property listings, and real estate insights.
                    </p>
                </div>

                {/* Grid - Stronger Borders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto border-r border-b border-gray-200">
                    {socialLinks.map((social) => (
                        <a 
                            key={social.id}
                            href={social.url} 
                            className="group p-10 flex flex-col justify-between aspect-square border-t border-l border-gray-200 transition-all duration-300 hover:bg-[#161616]"
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {social.id}
                                </span>
                                <div className="text-2xl text-[#161616] group-hover:text-white transition-all duration-300">
                                    {social.icon}
                                </div>
                            </div>

                            {/* Middle - High Contrast Text */}
                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-[#111111] group-hover:text-white mb-3 uppercase tracking-wider">
                                    {social.name}
                                </h4>
                                <p className="text-[15px] text-gray-700 group-hover:text-gray-300 leading-relaxed font-normal">
                                    {social.desc}
                                </p>
                            </div>

                            {/* Bottom - Interactive Call to Action */}
                            <div className="mt-10">
                                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#161616] group-hover:text-white border-b-2 border-[#161616] group-hover:border-white transition-all pb-1 inline-block">
                                    {social.action}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Affiliated Partners Section */}
                <div className="mt-24 pt-16 border-t border-gray-200">
                    <div className="text-center mb-12">
                        <span className="text-xs font-mono tracking-[0.4em] text-gray-700 uppercase">Affiliated Partners</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        <div className="relative group">
                            <Image 
                                src="/logo-1.png" 
                                alt="Partner 1" 
                                width={100} 
                                height={60} 
                                className="object-contain transition-all duration-300"
                            />
                        </div>
                        <div className="relative group">
                            <Image 
                                src="/logo-2.png" 
                                alt="Partner 2" 
                                width={100} 
                                height={60} 
                                className="object-contain transition-all duration-300"
                            />
                        </div>
                        <div className="relative group">
                            <Image 
                                src="/logo-3.png" 
                                alt="Partner 3" 
                                width={100} 
                                height={60} 
                                className="object-contain transition-all duration-300"
                            />
                        </div>
                        <div className="relative group">
                            <Image 
                                src="/logo-4.png" 
                                alt="Partner 4" 
                                width={100} 
                                height={60} 
                                className="object-contain  transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}