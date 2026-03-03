"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { TikTok } from "@/components/ui/TikTokIcon";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Acasă", href: "/" },
        { name: "Servicii", href: "/servicii" },
        { name: "Echipa", href: "/echipa" },
        { name: "Despre Noi", href: "/despre-noi" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-charcoal/90 backdrop-blur-md border-b border-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-serif text-2xl font-bold text-beige tracking-wider">
                            Barbur's Barber Shop
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-muted hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <a
                            href="https://mero.ro/p/barburs-barber-shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-accent hover:bg-beige text-charcoal font-semibold rounded-none transition-colors duration-300 uppercase text-xs tracking-widest"
                        >
                            Programează-te
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-beige hover:text-accent focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-charcoal absolute top-20 left-0 w-full border-b border-brand-dark shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-center text-beige hover:text-accent font-medium uppercase tracking-widest w-full border-b border-brand-dark/30 last:border-none"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex justify-center space-x-6 mt-8 pb-4 border-t border-brand-dark/30 pt-6 w-full">
                            <a href="https://www.facebook.com/profile.php?id=100063889680059" target="_blank" rel="noopener noreferrer" aria-label="Barbur's Barber Shop Facebook" className="text-muted hover:text-accent transition-colors p-2">
                                <Facebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/barbursbarbershop/" target="_blank" rel="noopener noreferrer" aria-label="Barbur's Barber Shop Instagram" className="text-muted hover:text-accent transition-colors p-2">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@barbur.sbarbershop" target="_blank" rel="noopener noreferrer" aria-label="Barbur's Barber Shop TikTok" className="text-muted hover:text-accent transition-colors p-2">
                                <TikTok size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
