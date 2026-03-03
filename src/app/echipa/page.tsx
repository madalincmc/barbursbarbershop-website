import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Echipa Noastră | Frizeri Profesioniști | Barbur's Barber Shop Baia Mare",
    description: "Cunoaște echipa Barbur's Barber Shop. Frizeri pasionați, specializați în fade-uri, tunsori clasice și aranjat barbă. Programează-te la frizerul preferat.",
};

const teamMembers = [
    {
        id: "andreea-cotet",
        name: "Andreea Coteț",
        role: "Specialist",
        bio: "Andreea este specialistul nostru recomandat de clienți pentru stilizarea perfectă a bărbii și tunsori excelente. Cu o atenție meticuloasă la detalii și o seriozitate desăvârșită.",
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1978&auto=format&fit=crop", // Female Barber
        rating: "4.98",
        reviews: "143"
    },
    {
        id: "rares-barbur",
        name: "Rareș Barbur",
        role: "Master Barber",
        bio: "Cu peste 1000 de evaluări excelente pe Mero, Rareș este inima Barbur's Barber Shop. Expert în tunsori clasice, fade-uri impecabile și stilizarea precisă a bărbii.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop", // Master Barber with Beard
        rating: "4.99",
        reviews: "1057"
    },
    {
        id: "ionut-ciocotisan",
        name: "Ionuț Ciocotișan",
        role: "Specialist",
        bio: "Ionuț este un adevărat artist când vine vorba de fade-uri și tunsori moderne. O experiență relaxantă și un rezultat întotdeauna peste așteptări.",
        image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop", // Modern Barber
        rating: "4.95",
        reviews: "550"
    },
    {
        id: "adela-barbur",
        name: "Adela Barbur",
        role: "Specialist",
        bio: "Adela completează echipa cu talentul ei desăvârșit pentru un look curat, clasic sau modern. Profesionalismul și calitatea se regăsesc în fiecare tunsoare.",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", // Female Barber 2
        rating: "4.96",
        reviews: "225"
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
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-accent flex items-center text-sm font-bold">
                                                <Star className="w-4 h-4 mr-1 fill-accent text-accent" />
                                                {member.rating}
                                            </span>
                                            <span className="text-sm text-muted">({member.reviews} evaluări)</span>
                                        </div>
                                    </div>
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
