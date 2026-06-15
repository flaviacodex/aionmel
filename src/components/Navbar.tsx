import React, { useState, useEffect } from 'react';
import { AionBeeIcon } from './BotanicalDecoration';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Filosofia", href: "#filosofia" },
    { name: "O Terroir", href: "#terroir" },
    { name: "Permapicultura", href: "#permapicultura" },
    { name: "O Caminho", href: "#o-caminho" },
    { name: "O Mel de Origem", href: "#mel-de-origem" },
    { name: "A Safra 01", href: "#safra-01" },
    { name: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#143126]/98 py-2.5 xs:py-3 shadow-xl border-b border-[#C9A04B]/30 backdrop-blur-md' 
            : 'bg-[#143126]/90 backdrop-blur-md py-3.5 xs:py-4.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12 flex justify-between items-center gap-2 xs:gap-4">
          
          {/* Logo Brand Title - Isolated and Highlighted Brand Identity */}
          <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 border-r border-[#C9A04B]/25 pr-3 xs:pr-5 sm:pr-10 shrink-0 py-1">
            <a href="#" className="flex items-center gap-3 xs:gap-4 sm:gap-5 group">
              <div className="bg-[#0c231b] border border-2 border-[#C9A04B]/40 p-1.5 xs:p-2 rounded-full shadow-xl shadow-black/25 transition-all duration-300 group-hover:border-[#C9A04B] group-hover:scale-105">
                <AionBeeIcon className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:scale-110" color="#C9A04B" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-2xl xs:text-3xl sm:text-4xl tracking-[0.25em] text-[#C9A04B] font-black leading-none uppercase">AION</span>
                <span className="font-sans text-[7px] xs:text-[8px] sm:text-[10px] tracking-[0.28em] text-white font-extrabold uppercase leading-none mt-1.5 xs:mt-2 whitespace-nowrap">Mel de Origem</span>
              </div>
            </a>
          </div>

          {/* Large Screen Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 flex-1 justify-center px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[9px] xl:text-[10px] tracking-[0.2em] text-[#E7D6A7]/65 hover:text-white uppercase font-black transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Right Button */}
          <div className="hidden sm:block">
            <a
              href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label="Reservar pote AION pelo WhatsApp"
              className="inline-flex items-center gap-2 px-5.5 py-3 bg-[#C9A04B] hover:bg-[#DCC38A] text-[#143126] font-sans text-[10px] uppercase tracking-widest font-extrabold transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" /> Reservar pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C9A04B]" /> : <Menu className="w-6 h-6 text-[#C9A04B]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#143126] flex flex-col justify-between pt-28 pb-8 px-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl text-[#F5F2EA] hover:text-[#C9A04B] transition-colors block py-2.5 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-8">
            <a
              href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
              target="_blank"
              referrerPolicy="no-referrer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chamar WhatsApp para reserva da Safra 01 da AION"
              className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-[#C9A04B] text-[#143126] font-sans text-xs uppercase tracking-widest font-bold hover:bg-[#DCC38A] transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" /> Chamar WhatsApp: (41) 99908-1569
            </a>
            <p className="text-center font-mono text-[9px] tracking-widest text-[#E7D6A7]/60 uppercase">
              AION • COLHIDO NO TEMPO DA NATUREZA
            </p>
          </div>
        </div>
      )}
    </>
  );
};
