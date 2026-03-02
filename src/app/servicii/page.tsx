import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Image from "next/image"; // Will use later or substitute with pure CSS

export const metadata: Metadata = {
    title: "Servicii Tuns și Aranjat Barbă Baia Mare | Barbur's Barber Shop",
    description: "Descoperă serviciile noastre premium: tuns bărbați, tuns copii, aranjat barbă și pachete complete la Barbur's Barber Shop în Baia Mare.",
};

const services = [
    {
        id: "tuns",
        title: "Tuns",
        price: "60–70 RON",
        duration: "40 min",
        description: "Serviciul include prespălare, tuns cu o tehnică de actualitate și styling în trend. Adaptăm fiecare stil fizionomiei tale pentru un rezultat masculin și curat, folosind produse profesionale.",
    },
    {
        id: "tuns-barba",
        title: "Tuns + Barbă",
        price: "85–100 RON",
        duration: "1h",
        description: "Procesul include tunsul părului și a bărbii, stilizarea bărbii și bărbierit precis cu briciul după aplicarea prosopului cald. Experiența supremă Barbur's de relaxare.",
    },
    {
        id: "tuns-skin-fade",
        title: "Tuns Skin Fade",
        price: "65–75 RON",
        duration: "40–50 min",
        description: "Tunsoare modernă realizată la milimetru cu mașina de tuns, foarfeca și shaverul. O tranziție perfectă, executată de profesioniști.",
    },
    {
        id: "tuns-scurt",
        title: "Tuns scurt / Buzz cut",
        price: "45–55 RON",
        duration: "30–40 min",
        description: "O tunsoare clasică, curată și rapidă, executată doar din mașina de tuns. Perfectă pentru o întreținere minimalistă a aspectului fizic.",
    },
    {
        id: "barba",
        title: "Aranjat Barbă",
        price: "30–35 RON",
        duration: "30 min",
        description: "Procesul include tunsul, stilizarea bărbii și un bărbierit tradițional cu briciul după tratamentul relaxant cu prosopul cald.",
    },
    {
        id: "tuns-copii",
        title: "Tuns Copii",
        price: "50–65 RON",
        duration: "30–40 min",
        description: "Răbdare și atenție pentru cei mici. Transformăm tunsul într-o experiență plăcută și relaxantă. Ne asigurăm că experiența este lipsită de stres.",
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-beige font-bold mb-6">Servicii & Prețuri</h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-muted">Alege calitatea, alege un stil care te definește.</p>
                </div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="bg-charcoal border border-brand-dark p-8 md:p-10 scroll-m-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:border-accent transition-colors duration-500"
                        >
                            <div className="max-w-xl">
                                <div className="flex items-baseline gap-4 mb-4">
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-beige group-hover:text-accent transition-colors">{service.title}</h2>
                                    <div className="flex items-center gap-3 md:hidden">
                                        <span className="text-xl font-bold text-accent">{service.price}</span>
                                        <span className="text-sm px-2 py-1 bg-brand-dark/50 text-muted rounded-none border border-brand-dark">{service.duration}</span>
                                    </div>
                                </div>
                                <p className="text-muted leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <Button href="https://mero.ro/p/barburs-barber-shop" variant="primary" size="sm">
                                        Programează-te
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col items-end min-w-[120px] gap-2">
                                <span className="text-3xl font-bold text-accent text-right whitespace-nowrap">{service.price}</span>
                                <span className="text-sm px-3 py-1 bg-brand-dark/30 text-muted border border-brand-dark/50">{service.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
