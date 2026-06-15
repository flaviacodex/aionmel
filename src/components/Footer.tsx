import React from 'react';
import { AionBeeIcon } from './BotanicalDecoration';
import { Mail, MessageSquare, Shield, Clock, BookOpen, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-aion-green text-aion-light pt-20 pb-28 xs:pb-32 sm:pb-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <AionBeeIcon className="w-20 h-20 text-[#C9A04B]" color="#C9A04B" />
              <div className="flex flex-col text-left justify-center">
                <span className="font-serif text-3.5xl tracking-[0.3em] text-white font-medium block leading-none">AION</span>
                <span className="font-sans text-[9px] tracking-[0.28em] text-[#C9A04B] font-extrabold uppercase block mt-2.5 whitespace-nowrap">Mel de Origem</span>
              </div>
            </div>
            <p className="font-sans text-sm text-aion-light/75 leading-relaxed max-w-sm">
              Um projeto dedicado a catalogar e disponibilizar mel cru de floradas silvestres do Sul do Brasil. Respeitando o tempo das colônias e os ciclos intocados da natureza.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 pt-4">
            <ul className="space-y-2.5 text-sm font-sans text-aion-light/80">
              <li>
                <a href="#especial" className="hover:text-aion-gold transition-colors inline-flex items-center gap-2">
                  Filosofia
                </a>
              </li>
              <li>
                <a href="#territorio" className="hover:text-aion-gold transition-colors inline-flex items-center gap-2">
                  O Terroir
                </a>
              </li>
              <li>
                <a href="#permapicultura" className="hover:text-aion-gold transition-colors inline-flex items-center gap-2">
                  Permapicultura
                </a>
              </li>
              <li>
                <a href="#o-caminho" className="hover:text-aion-gold transition-colors inline-flex items-center gap-2">
                  O Caminho
                </a>
              </li>
              <li>
                <a href="#mel-de-origem" className="hover:text-aion-gold transition-colors inline-flex items-center gap-2">
                  O Mel de Origem
                </a>
              </li>
              <li>
                <a href="#primeira-edicao" className="hover:text-aion-gold transition-colors inline-flex items-center gap-2">
                  Ficha da Safra 01
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-mono text-[10px] tracking-widest text-aion-champagne uppercase">CONTATO E ATENDIMENTO</span>
            <ul className="space-y-3.5 text-sm font-sans text-aion-light/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-aion-gold mt-1" />
                <span>Colinas do Planalto, PR/SC<br />Sul do Brasil (Atendimento sob agendamento)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aion-gold" />
                <a href="mailto:contato@aionmel.com" className="hover:text-aion-gold transition-colors">contato@aionmel.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-aion-gold" />
                <a 
                  href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%2520confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega." 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="hover:text-aion-gold transition-colors font-medium"
                >
                  WhatsApp: (41) 99908-1569
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-aion-light/60 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} AION Mel de Origem — Safra 01. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <span>Edição Limitada de Origem</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
