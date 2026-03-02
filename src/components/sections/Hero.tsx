"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-start justify-center h-full max-w-7xl pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <span className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
                        Bun venit la Barbur's Barber Shop
                    </span>

                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-beige leading-[1.1] mb-6">
                        Frizerie & Barber Shop <br />
                        <span className="text-accent">Premium</span> în Baia Mare
                    </h1>

                    <p className="text-xl md:text-2xl text-muted font-light mb-10 max-w-2xl leading-relaxed">
                        Experiența clasică a bărbieritului combinată cu tehnici moderne. Dincolo de un simplu tuns, îți oferim rafinament, precizie și o atmosferă unică.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            href="https://mero.ro/p/barburs-barber-shop"
                            size="lg"
                        >
                            Programează-te acum
                        </Button>
                        <Button
                            href="/servicii"
                            variant="outline"
                            size="lg"
                        >
                            Descoperă serviciile
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
