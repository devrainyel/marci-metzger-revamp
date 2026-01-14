import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="py-24 bg-[#F5F5F4] border-t border-[#161616]/5" id="contact">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-sm uppercase tracking-[0.4em] text-gray-700 font-bold mb-4">Get In Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#161616] mb-6 tracking-tight uppercase">Contact</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-l border-[#161616]/10">

                    {/* Column 1: Contact Info & Hours (5/12 width) */}
                    <div className="lg:col-span-5 border-r border-b border-[#161616]/10 p-10 md:p-16">
                        <div className="space-y-12">
                            {/* Brand Branding */}
                            <div>
                                <h4 className="text-xl font-bold text-[#161616] uppercase tracking-wide mb-2">Marci Metzger</h4>
                                <p className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase">The Ridge Realty Group</p>
                            </div>

                            {/* Details */}
                            <div className="space-y-8">
                                <a href="tel:2069196886" className="flex items-start gap-4 group">
                                    <FaPhoneAlt className="mt-1 text-[#161616] group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Call Directly</p>
                                        <p className="text-lg text-[#161616] font-medium">(206) 919-6886</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="mt-1 text-[#161616]" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Office Location</p>
                                        <p className="text-lg text-[#161616] font-medium leading-relaxed">
                                            3190 HW-160, Suite F<br />
                                            Pahrump, Nevada 89048
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaClock className="mt-1 text-[#161616]" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Office Hours</p>
                                        <p className="text-lg text-[#161616] font-medium">Daily: 08:00 am – 07:00 pm</p>
                                    </div>
                                </div>
                            </div>

                            {/* Special Note */}
                            <div className="bg-[#161616] p-8 text-white">
                                <div className="flex gap-4 items-center mb-4">
                                    <FaCalendarAlt className="text-white/50" />
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Flexibility</p>
                                </div>
                                <p className="text-sm font-light leading-relaxed text-gray-300">
                                    Appointments outside office hours available upon request. Just call!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: The Form (7/12 width) */}
                    <div className="lg:col-span-7 border-r border-b border-[#161616]/10 p-10 md:p-16 bg-gray-50/30">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-white border border-[#161616]/10 p-4 focus:outline-none focus:border-[#161616] transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                                    <input type="email" className="w-full bg-white border border-[#161616]/10 p-4 focus:outline-none focus:border-[#161616] transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Property Interest</label>
                                <select className="w-full bg-white border border-[#161616]/10 p-4 focus:outline-none focus:border-[#161616] transition-colors appearance-none">
                                    <option>Buying</option>
                                    <option>Selling</option>
                                    <option>Investment</option>
                                    <option>Relocation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">How can we help?</label>
                                <textarea rows={5} className="w-full bg-white border border-[#161616]/10 p-4 focus:outline-none focus:border-[#161616] transition-colors" placeholder="Tell us about your real estate goals..."></textarea>
                            </div>

                            <button className="w-full bg-[#161616] text-white text-[11px] font-bold uppercase tracking-[0.3em] py-5 hover:bg-gray-800 transition-all duration-300 shadow-xl">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}