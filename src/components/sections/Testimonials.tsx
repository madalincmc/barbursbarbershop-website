"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Testimonials() {
    const reviews = [
        {
            name: "Client Mero",
            text: "Cea mai bună tunsoare pe care am avut-o în ultimul timp! Mulțumesc pentru stilizarea perfectă a bărbii și pentru tunsoarea excelentă. Recomand acest loc și în special pe Andreea pentru talent și seriozitate.",
            rating: 5,
        },
        {
            name: "Client Mero",
            text: "Seviciu de înaltă calitate, mulțumesc Andreea, felicitări pentru munca depusă 😊",
            rating: 5,
        },
        {
            name: "Client Mero",
            text: "Toate femeile se uită după mine acum! Superb!!! Nota 10👌",
            rating: 5,
        },
        {
            name: "Client Mero",
            text: "Atmosferă premium și servicii impecabile. Totul la superlativ, cu siguranță cel mai bun barber shop din Baia Mare!",
            rating: 5,
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-24 bg-background border-y border-brand-dark overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column - Stats & Info */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-beige font-bold leading-tight">
                            Alegerea nr. 1 în Baia Mare
                        </h2>
                        <div className="w-20 h-1 bg-accent"></div>

                        <div className="bg-charcoal border border-brand-dark p-6 rounded-sm shadow-xl relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 text-accent/10">
                                <Star className="w-32 h-32 fill-current" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-5xl font-serif font-bold text-beige mb-2">4.97<span className="text-2xl text-muted">/5</span></div>
                                <div className="flex text-accent mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="fill-current w-5 h-5" />)}
                                </div>
                                <p className="text-muted text-sm leading-relaxed mb-6">
                                    Scor generat din <strong>8,433+</strong> evaluări verificate pe platforma Mero. Fiecare recenzie reprezintă un client satisfăcut.
                                </p>
                                <Button href="https://mero.ro/p/barburs-barber-shop" variant="primary" size="sm">
                                    Vezi pe Mero
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Carousel */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                                        <div className="bg-charcoal border border-brand-dark p-8 md:p-12 md:h-[350px] flex flex-col justify-between group hover:border-accent/50 transition-colors duration-500">
                                            <div>
                                                <Quote className="text-accent/20 w-12 h-12 mb-6" />
                                                <p className="text-beige md:text-xl md:leading-relaxed italic mb-8">
                                                    "{review.text}"
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between border-t border-brand-dark/50 pt-6">
                                                <div className="flex items-center">
                                                    <div className="w-12 h-12 bg-brand-dark flex items-center justify-center font-bold text-beige mr-4 text-lg">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-beige">{review.name}</h4>
                                                        <span className="text-xs text-accent uppercase tracking-widest mt-1 block">Client Verificat</span>
                                                    </div>
                                                </div>
                                                <div className="flex text-accent">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} className="fill-current w-4 h-4 ml-1" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex items-center gap-4 justify-end mt-8 pr-4">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full border border-brand-dark flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors focus:outline-none"
                                aria-label="Previous review"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className="flex gap-2">
                                {reviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-brand-dark'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full border border-brand-dark flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors focus:outline-none"
                                aria-label="Next review"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
