import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
    title: "Echipa Noastră | Frizeri Profesioniști | Barbur's Barber Shop Baia Mare",
    description: "Cunoaște echipa Barbur's Barber Shop. Frizeri pasionați, specializați în fade-uri, tunsori clasice și aranjat barbă. Programează-te la frizerul preferat.",
};

const teamMembers = [
    {
        id: "andreea",
        name: "Andreea",
        role: "Senior Barber",
        bio: "Andreea este specialistul nostru recomandat de clienți pentru stilizarea perfectă a bărbii și tunsori excelente. Cu o atenție meticuloasă la detalii și o seriozitate desăvârșită, transformă fiecare vizită într-o experiență relaxantă.",
        image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop", // Placeholder
        social: "https://www.instagram.com/barbursbarbershop/"
    },
    {
        id: "alex-barbur",
        name: "Alex Barbur",
        role: "Master Barber",
        bio: "Specializat pe tunsori clasice executate exclusiv din foarfecă, fade-uri impecabile și tratamente premium pentru barbă. Profesionalismul și calitatea sunt pe primul loc.",
        image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop", // Placeholder
        social: "https://www.instagram.com/barbursbarbershop/"
    }
];

export default function TeamPage() {
    return (
        <div className="bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-beige font-bold mb-6">Echipa Noastră</h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Oameni pasionați, dedicați meseriei și atenți la fiecare detaliu. Pentru că o tunsoare excelentă cere o mână de maestru.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-charcoal border border-brand-dark group overflow-hidden">
                            <div
                                className="w-full h-[400px] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                style={{ backgroundImage: `url('${member.image}')` }}
                            ></div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-3xl font-serif font-bold text-beige">{member.name}</h2>
                                    <a href={member.social} className="text-muted hover:text-accent transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                                <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-6 pb-6 border-b border-brand-dark/50">
                                    {member.role}
                                </p>
                                <p className="text-muted leading-relaxed mb-8">
                                    {member.bio}
                                </p>
                                <Button href="https://mero.ro/p/barburs-barber-shop" fullWidth variant="outline">
                                    Programează-te cu {member.name.split(" ")[0]}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
