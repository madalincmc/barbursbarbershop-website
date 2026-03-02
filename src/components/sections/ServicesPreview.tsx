import Button from "@/components/ui/Button";

export default function ServicesPreview() {
    const services = [
        { title: "Tuns", price: "60–70 RON", desc: "Prespălare + tuns + styling în trend. (40 min)" },
        { title: "Tuns + Barbă", price: "85–100 RON", desc: "Tuns + barbă + brici după prosop cald. (1h)" },
        { title: "Tuns Skin Fade", price: "65–75 RON", desc: "Tunsoare la milimetru cu foarfecă și shaver. (40–50 min)" },
        { title: "Aranjat Barbă", price: "30–35 RON", desc: "Tuns/stilizare barbă + brici. (30 min)" },
    ];

    return (
        <section className="py-24 bg-charcoal border-y border-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-serif text-beige font-bold mb-6">Servicii Principale</h2>
                        <div className="w-16 h-1 bg-accent mb-6"></div>
                        <p className="text-muted text-lg">
                            De la tunsori sharp și moderne la tratamente clasice pentru barbă, folosim doar produse premium.
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <Button href="/servicii" variant="outline">Vezi toate serviciile</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b border-brand-dark/50 pb-6 group">
                            <div>
                                <h3 className="text-xl font-serif font-bold text-beige group-hover:text-accent transition-colors mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-muted text-sm">{service.desc}</p>
                            </div>
                            <div className="text-xl font-bold text-accent ml-4 whitespace-nowrap">
                                {service.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
