import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Despre Noi | Povestea Barbur's Barber Shop Baia Mare",
    description: "Află povestea Barbur's Barber Shop, destinația ta pentru o experiență autentică de bărbierit în inima orașului Baia Mare.",
};

export default function AboutPage() {
    return (
        <div className="bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-beige font-bold mb-6">Povestea Noastră</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="w-full lg:w-1/2">
                        <div
                            className="w-full aspect-[4/5] bg-cover bg-center border border-brand-dark"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1978&auto=format&fit=crop')" }}
                        ></div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl font-serif text-beige font-bold">Un nou standard în grooming-ul masculin din Baia Mare</h2>
                        <p className="text-muted leading-relaxed text-lg text-justify">
                            Barbur's Barber Shop nu este doar o altă frizerie. Este un concept născut din pasiune și respect pentru meseria clasică de frizer. Aici, tradiția întâlnește standardele moderne de excelență.
                        </p>
                        <p className="text-muted leading-relaxed text-lg text-justify">
                            Ne-am propus să creăm un spațiu în care fiecare bărbat să se simtă binevenit, să se relaxeze și să plece reflectând cea mai bună versiune a sa. Investim constant în educația echipei noastre și în produse de top.
                        </p>
                        <div className="pt-6 border-t border-brand-dark/50">
                            <span className="text-accent font-serif italic text-2xl block mb-2">"O tunsoare bună îți schimbă postura, atitudinea și ziua."</span>
                            <span className="text-beige font-bold text-sm tracking-widest uppercase">— Fondatorul Barbur's</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
