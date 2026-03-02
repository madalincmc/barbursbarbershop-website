export default function MobileStickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-brand-dark p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
            <a
                href="https://mero.ro/p/barburs-barber-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3.5 bg-accent text-charcoal font-bold text-sm uppercase tracking-widest rounded-none hover:bg-beige transition-colors active:scale-[0.98]"
            >
                Programează-te Acum
            </a>
        </div>
    );
}
