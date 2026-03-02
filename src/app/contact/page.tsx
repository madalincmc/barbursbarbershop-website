import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="w-full lg:w-2/3 min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.1691132717835!2d23.56434711563604!3d47.64985437918738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736f86cae0a116b%3A0xc6cf6eefffd5f303!2sBarbur&#39;s%20Barber%20Shop!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%) hue-rotate(180deg)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
