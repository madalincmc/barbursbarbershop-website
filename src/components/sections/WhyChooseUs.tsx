import { ShieldCheck, Scissors, Beer, Users } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            title: "Măiestrie",
            description: "Frizeri cu experiență, pasionați de detalii și execuții precise din foarfecă.",
            icon: <Scissors className="w-8 h-8 text-accent" />,
        },
        {
            title: "Atmsoferă",
            description: "Un spațiu creat pentru relaxarea ta, o evadare din agitația cotidiană.",
            icon: <Beer className="w-8 h-8 text-accent" />,
        },
        {
            title: "Precizie",
            description: "Linii sharp, fade-uri curate și contururi realizate impecabil de fiecare dată.",
            icon: <ShieldCheck className="w-8 h-8 text-accent" />,
        },
        {
            title: "Comunitate",
            description: "Nu ești doar un client, ești parte din familia Barbur's Baia Mare.",
            icon: <Users className="w-8 h-8 text-accent" />,
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-beige font-bold mb-6">De ce să ne alegi pe noi?</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-muted text-lg">
                        Respectăm tradiția veritabilă a bărbieritului, dar o îmbrăcăm într-un stil modern, perfect adaptat bărbatului din ziua de azi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-charcoal border border-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-dark group-hover:scale-110 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold font-serif text-beige mb-3">{feature.title}</h3>
                            <p className="text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
