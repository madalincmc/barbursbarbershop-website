import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Clock, Instagram, Facebook, Link as LinkIcon } from "lucide-react";
import { TikTok } from "@/components/ui/TikTokIcon";

export const metadata: Metadata = {
    title: "Contact & Locație | Barbur's Barber Shop Baia Mare",
    description: "Ne găsești în Baia Mare! Vezi adresa, programul nostru de funcționare și informații despre parcare. Programează-te rapid online.",
};

export default function ContactPage() {
    return (
        <div className="bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-beige font-bold mb-6">Contact & Locație</h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Suntem aici pentru a-ți oferi cea mai bună experiență. Programează-te online sau contactează-ne direct.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-charcoal border border-brand-dark p-6 md:p-12">
                    {/* Contact Details */}
                    <div className="w-full lg:w-1/3 space-y-10">
                        <div>
                            <h3 className="text-xl font-serif text-beige mb-6 pb-2 border-b border-brand-dark inline-block">Programează-te</h3>
                            <p className="text-muted mb-6">Cea mai rapidă metodă de a te asigura că ai locul rezervat.</p>
                            <Button href="https://mero.ro/p/barburs-barber-shop" fullWidth>
                                Rezervă pe Mero
                            </Button>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="text-accent mt-1 mr-4 w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="text-beige font-bold mb-1">Adresa</h4>
                                    <p className="text-muted">Bulevardul Traian 3<br />Baia Mare, România<br />În același bloc cu magazinul Carrefour Express.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="text-accent mt-1 mr-4 w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="text-beige font-bold mb-1">Telefon</h4>
                                    <a href="tel:+40700000000" className="text-muted hover:text-accent transition-colors">Programări via Mero</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="text-accent mt-1 mr-4 w-6 h-6 flex-shrink-0" />
                                <div className="w-full">
                                    <h4 className="text-beige font-bold mb-3">Program</h4>
                                    <ul className="text-muted w-full max-w-[200px] space-y-2">
                                        <li className="flex justify-between border-b border-brand-dark/30 pb-1"><span>L - V</span> <span>09:00 - 20:00</span></li>
                                        <li className="flex justify-between border-b border-brand-dark/30 pb-1"><span>S</span> <span>09:00 - 15:00</span></li>
                                        <li className="flex justify-between text-accent font-medium"><span>D</span> <span>Închis</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <LinkIcon className="text-accent mt-1 mr-4 w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="text-beige font-bold mb-3">Rețele Sociale</h4>
                                    <div className="flex space-x-2 -ml-2">
                                        <a href="https://www.facebook.com/profile.php?id=100063889680059" target="_blank" rel="noopener noreferrer" aria-label="Barbur's Barber Shop Facebook" className="text-muted hover:text-accent transition-colors p-2">
                                            <Facebook size={24} />
                                        </a>
                                        <a href="https://www.instagram.com/barbursbarbershop/" target="_blank" rel="noopener noreferrer" aria-label="Barbur's Barber Shop Instagram" className="text-muted hover:text-accent transition-colors p-2">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="https://www.tiktok.com/@barbur.sbarbershop" target="_blank" rel="noopener noreferrer" aria-label="Barbur's Barber Shop TikTok" className="text-muted hover:text-accent transition-colors p-2">
                                            <TikTok size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="w-full lg:w-2/3 h-[400px] md:h-auto md:min-h-[500px] overflow-hidden bg-[#1A1A1A] rounded-sm">
                        <iframe
                            src="https://maps.google.com/maps?q=Barbur's%20Barber%20Shop%20Baia%20Mare&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%) hue-rotate(180deg)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Barbur's Barber Shop Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
