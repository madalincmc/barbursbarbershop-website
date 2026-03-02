import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <Testimonials />

      <section className="py-32 bg-background text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-serif font-bold text-beige mb-6">Pregătit pentru o schimbare?</h2>
        <a
          href="https://mero.ro/p/barburs-barber-shop"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-accent hover:bg-beige text-charcoal font-bold transition-colors uppercase tracking-widest text-sm"
        >
          Programează-te acum
        </a>
      </section>
    </>
  );
}
