import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal pt-16 pb-8 border-t border-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="space-y-4">
                        <Link href="/" className="font-serif text-3xl font-bold text-beige tracking-wider block">
                            Barbur's Barber Shop
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs">
                            Experiența clasică a bărbieritului combinată cu tehnici moderne, în inima orașului Baia Mare.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-muted hover:text-accent transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-muted hover:text-accent transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h3 className="text-beige font-serif text-xl mb-6">Navigație</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-muted hover:text-accent transition-colors text-sm">Acasă</Link></li>
                            <li><Link href="/servicii" className="text-muted hover:text-accent transition-colors text-sm">Servicii</Link></li>
                            <li><Link href="/echipa" className="text-muted hover:text-accent transition-colors text-sm">Echipa</Link></li>
                            <li><Link href="/despre-noi" className="text-muted hover:text-accent transition-colors text-sm">Despre Noi</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-accent transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h3 className="text-beige font-serif text-xl mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={18} className="text-accent mt-1 mr-3 flex-shrink-0" />
                                <span className="text-muted text-sm leading-relaxed">Bulevardul Traian 3<br />Baia Mare, România</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                                <a href="https://mero.ro/p/barburs-barber-shop" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors text-sm">Programări via Mero</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Col */}
                    <div>
                        <h3 className="text-beige font-serif text-xl mb-6">Program</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center border-b border-brand-dark/50 pb-2">
                                <span className="text-muted text-sm">Luni - Vineri</span>
                                <span className="text-beige text-sm font-medium">09:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-brand-dark/50 pb-2">
                                <span className="text-muted text-sm">Sâmbătă</span>
                                <span className="text-beige text-sm font-medium">09:00 - 15:00</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-muted text-sm">Duminică</span>
                                <span className="text-accent text-sm font-medium">Închis</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-dark pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted text-xs mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Barbur's Barber Shop. Toate drepturile rezervate.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/termeni" className="text-muted hover:text-beige text-xs transition-colors">Termeni și Condiții</Link>
                        <Link href="/politica" className="text-muted hover:text-beige text-xs transition-colors">Politica de Confidențialitate</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
