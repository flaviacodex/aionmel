import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Leaf, 
  MapPin, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  Info, 
  Lock, 
  Eye, 
  CheckCircle2, 
  Droplet,
  Compass,
  FileCheck,
  Award,
  Phone
} from 'lucide-react';

// Subcomponents import
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FAQAccordion } from './components/FAQAccordion';
import { BotanicalBranch, BotanicalLogoMark, BotanicalSingleLeaf, AionBeeIcon } from './components/BotanicalDecoration';

// Imported generated assets paths
const aionHoneyJar = "/src/assets/images/aion_sensorial_hero_final_portuguese_1781485096392.jpg";
const landscapeSouthBrazil = "/src/assets/images/terroir_hills_1781238163494.jpg";
const honeyDrippingSpoon = "/src/assets/images/honey_dripping_spoon_1781238130155.jpg";
const beesOnHoneycomb = "/src/assets/images/bees_on_honeycomb_1781238145357.jpg";
const permapiculturaBrandImage = "/src/assets/images/permapicultura_editorial_1781485897366.jpg";

export default function App() {
  const [microActiveFeature, setMicroActiveFeature] = useState<string | null>(null);

  // Indicators list for hero
  const indicators = [
    "Mel Cru",
    "Florada Silvestre",
    "Produção Artesanal",
    "Safra Limitada"
  ];

  // Section 3 concepts list
  const specConcepts = [
    {
      id: "concepto-1",
      title: "Florada de Origem",
      badge: "Singular",
      desc: "Cada colheita nasce de uma combinação específica de flores, clima e tempo. Por isso, aroma, cor e textura podem variar naturalmente entre as safras.",
      icon: <Leaf className="w-5 h-5 text-[#C9A04B]" />,
      promise: "Identidade Única"
    },
    {
      id: "concepto-2",
      title: "Não Aquecido",
      badge: "PRESERVADO",
      desc: "O mel não passa por aquecimento intenso. Preservamos suas características naturais, sua textura e seus aromas originais.",
      icon: <Droplet className="w-5 h-5 text-[#C9A04B]" />,
      promise: "Estrutura Preservada"
    },
    {
      id: "concepto-3",
      title: "Pequena Escala",
      badge: "Artesanal",
      desc: "Produção limitada, envase cuidadoso e acompanhamento próximo de cada lote. AION não nasce para volume, nasce para origem.",
      icon: <Sparkles className="w-5 h-5 text-[#C9A04B]" />,
      promise: "Pequena Escala"
    },
    {
      id: "concepto-4",
      title: "Safra Limitada",
      badge: "Finita",
      desc: "Nenhuma safra se repete. Quando o lote termina, aquela combinação de florada, clima e tempo não volta da mesma forma.",
      icon: <Award className="w-5 h-5 text-[#C9A04B]" />,
      promise: "Volume Restrito"
    }
  ];

  return (
    <div className="min-h-screen bg-aion-light text-aion-dark font-sans relative overflow-x-hidden antialiased">
      
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-[#F5F1E8]">
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E7D6A7]/10 rounded-full blur-3xl pointer-events-none -translate-y-12" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 items-center">
          
          {/* Hero text layout */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-7 z-10 text-left order-2 lg:order-1 pt-4 lg:pt-0">
            
            <div className="space-y-4">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#C9A04B] font-extrabold uppercase block">Lançamento Exclusivo</span>
              <h1 className="font-serif text-4.5xl xs:text-5xl sm:text-7xl md:text-8xl text-[#143126] font-extrabold tracking-tight leading-[1.02]">
                AION Safra 01
              </h1>
              
              <p className="font-serif text-2xl sm:text-3xl text-[#C9A04B] font-semibold italic tracking-wide leading-relaxed">
                Mel de origem em lote limitado
              </p>
            </div>

            <p className="font-sans text-sm md:text-base text-[#2B2B2B] leading-relaxed max-w-xl font-normal">
              Mel de floradas naturais, não aquecido e não ultrafiltrado. Produzido em pequena escala e disponível apenas enquanto durar a primeira colheita.
            </p>

            {/* List indicators styled with luxury touch - showing precise specifications without price */}
            <div className="bg-[#143126]/4 border border-[#143126]/10 p-5 max-w-xl shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#143126] font-extrabold uppercase">
                    Pote 500g
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#143126] font-extrabold uppercase">
                    Safra 01
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#143126] font-extrabold uppercase">
                    Lote 01
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#143126] font-extrabold uppercase">
                    Curitiba, PR
                  </span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#C9A04B] font-extrabold uppercase">
                    Lote Limitado
                  </span>
                </div>
              </div>
            </div>

            {/* CTA action button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
                target="_blank"
                referrerPolicy="no-referrer"
                aria-label="Reservar pote AION pelo WhatsApp"
                className="inline-flex justify-center items-center gap-3 px-8 py-4.5 bg-[#143126] hover:bg-[#C9A04B] text-white font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl shadow-[#143126]/12 group cursor-pointer hover:scale-[1.02] active:scale-98"
              >
                Reservar meu pote pelo WhatsApp <ArrowRight className="w-4 h-4 text-[#C9A04B] group-hover:translate-x-1 transition-transform duration-350" />
              </a>
              <a
                href="#safra-01"
                aria-label="Ver ficha técnica da Safra 01"
                className="inline-flex justify-center items-center px-8 py-4.5 bg-white border border-[#143126]/15 hover:bg-[#F5F2EA] text-[#143126] font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:border-[#143126]/30"
              >
                Ver ficha da Safra 01
              </a>
            </div>

            {/* Reassurance tag with high visual contrast */}
            <p className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#143126]/70 uppercase flex items-center gap-1.5 font-bold pt-2">
              Envio em embalagem reforçada para todo o país
            </p>
          </div>

          {/* Hero beautiful botanical photography panel (SENSORIAL ENHANCEMENT) */}
          <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2 w-full pt-6 lg:pt-0">
            
            {/* Elegant outer vector framing */}
            <div className="absolute -inset-4 border border-[#C9A04B]/20 rounded-none pointer-events-none scale-95" />
            
            {/* Subtle botanical signature overlapping the image */}
            <div className="absolute -top-6 -right-3 lg:-top-12 lg:-right-8 text-[#C9A04B]/30 pointer-events-none z-10">
              <BotanicalLogoMark className="w-28 h-28" />
            </div>

            {/* Sensorial Editorial Hero Image - Increased size and impact */}
            <div className="relative overflow-hidden border-2 border-[#C9A04B]/20 shadow-2xl bg-[#F5F1E8] w-full max-w-sm lg:max-w-md aspect-[4/5] sm:aspect-[3/4]">
              <img 
                src={aionHoneyJar} 
                alt="Composição sensorial do Mel de Origem AION, pote real de vidro com mel âmbar e tampa cobre ao fundo, e mel denso escorrendo de colher de madeira no primeiro plano"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Bottom mini card badge - Clean & Minimal luxury details without layout noise */}
            <div className="absolute -bottom-3 right-6 bg-white/95 backdrop-blur-sm border border-[#C9A04B]/25 py-2.5 px-4 shadow-xl hidden sm:block z-10 transition-transform duration-300 hover:translate-y-[-2px]">
              <span className="font-serif text-xs text-[#143126] font-extrabold tracking-wide block">Florada de Altitude</span>
              <span className="font-sans text-[8.5px] tracking-widest text-[#C9A04B] uppercase font-semibold block mt-0.5">Sabor Outonal Puro</span>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2 (O Manifesto / Provérbio) */}
      <section id="proverbio" className="py-24 bg-aion-green text-aion-light relative overflow-hidden">
        {/* Subtle overlay elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" />
        <div className="absolute -bottom-24 -left-24 text-white/5 pointer-events-none">
          <BotanicalBranch className="w-80 h-80" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <span className="block font-sans text-xs tracking-[0.3em] text-aion-champagne uppercase">FILOSOFIA DA MARCA</span>
          
          <blockquote className="font-serif text-2xl sm:text-3.5xl md:text-4.5xl text-white font-light tracking-tight leading-relaxed max-w-3xl mx-auto italic">
            &ldquo;Nenhuma safra se repete.&rdquo;
          </blockquote>

          <div className="w-16 h-[1px] bg-aion-gold/30 mx-auto" />

          <p className="font-serif text-lg md:text-xl text-aion-light/85 max-w-2xl mx-auto leading-relaxed font-light">
            A florada muda, o clima oscila e as próprias estações respiram de forma diferente a cada ciclo. Por isso, cada colheita possui uma assinatura física e sensorial inédita. A natureza preserva sua excelência recusando-se a produzir cópias industriais.
          </p>

          <p className="font-sans text-[11px] tracking-widest text-aion-gold uppercase">
            AION — O Tempo da Natureza
          </p>
        </div>
      </section>

      {/* SECTION 3 (O que torna esta safra especial) */}
      <section id="filosofia" className="py-24 bg-white px-6 md:px-12 lg:px-24 border-b border-aion-gold/15 scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          
          {/* Title description block info */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="block font-sans text-xs tracking-[0.25em] text-[#C9A04B] uppercase font-bold">A FILOSOFIA DE PUREZA</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#143126] font-normal tracking-tight">
              O que torna esta safra singular
            </h2>
            <p className="font-sans text-sm md:text-base text-[#2B2B2B] leading-relaxed max-w-xl mx-auto">
              Projetamos cada detalhe sob o oposto do ruído comercial. Sem aditivos, sem processos industriais e sem pressa. Apenas a expressão natural da colheita.
            </p>
          </div>

          {/* Grid layout for cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specConcepts.map((item, index) => (
              <div 
                key={item.id}
                className="border border-[#C9A04B]/20 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#C9A04B] hover:-translate-y-1 hover:shadow-lg relative group"
              >
                <div className="absolute top-4 right-4 font-mono text-[9px] tracking-widest text-[#C9A04B] uppercase font-bold">
                  {item.badge}
                </div>
                
                <div className="space-y-6">
                  <div className="w-10 h-10 rounded-full border border-[#C9A04B]/20 flex items-center justify-center bg-[#F5F1E8] group-hover:bg-[#143126] group-hover:border-[#143126] transition-all duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#143126] font-medium mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-[#2B2B2B] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#C9A04B]/10 mt-6 flex items-center justify-between text-xs font-sans text-[#143126] font-semibold">
                  <span>{item.promise}</span>
                  <div className="w-1 h-1 rounded-full bg-[#C9A04B]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SENSORY SECTION */}
      <section className="py-24 bg-white px-4 sm:px-6 md:px-12 lg:px-24 border-b border-[#C9A04B]/15 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-12 xl:col-span-6 space-y-6 text-left">
              <span className="block font-sans text-xs tracking-[0.25em] text-[#C9A04B] uppercase font-bold">EXPERIÊNCIA SENSORIAL</span>
              <h2 className="font-serif text-3.5xl md:text-5xl text-[#143126] font-normal tracking-tight">
                Textura, aroma e cor de uma colheita única.
              </h2>
              <p className="font-sans text-sm md:text-base text-[#2B2B2B] leading-relaxed font-normal">
                AION preserva as variações naturais do mel: o dourado da florada, a densidade da colheita e os aromas próprios daquele ciclo. Não buscamos padronizar o mel. Buscamos revelar sua origem.
              </p>
              
              <div className="pt-4">
                <a
                  href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  aria-label="Reservar pote de mel AION Safra 01 pelo WhatsApp"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#143126] hover:bg-[#C9A04B] text-white font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-md group cursor-pointer"
                >
                  Quero provar a Safra 01 <ArrowRight className="w-4 h-4 text-[#C9A04B] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-6 relative aspect-[4/3] w-full overflow-hidden border border-[#C9A04B]/20 shadow-xl bg-[#F5F1E8]">
              <img 
                src={honeyDrippingSpoon} 
                alt="Mel âmbar escorrendo lentamente de uma colher de madeira"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-95"
              />
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-[#C9A04B]/60" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-[#C9A04B]/60" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-[#C9A04B]/60" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-[#C9A04B]/60" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 (A Origem da Safra 01 - Terroir) */}
      <section id="terroir" className="relative py-28 px-4 sm:px-6 md:px-12 lg:px-24 text-white overflow-hidden bg-[#143126] scroll-mt-24 sm:scroll-mt-28">
        
        {/* Background Image of Pristine Brazilian forest with clean dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={landscapeSouthBrazil} 
            alt="Paisagem natural associada à origem da Safra 01"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#143126] via-[#143126]/95 to-[#143126]/40" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
            <span className="block font-mono text-xs tracking-[0.25em] text-[#C9A04B] uppercase font-bold">O TERROIR</span>
            <h2 className="font-serif text-3.5xl md:text-5xl text-white font-normal tracking-tight leading-tight">
              Origem que se percebe no sabor
            </h2>
            
            <p className="font-sans text-sm md:text-base text-white/95 leading-relaxed font-normal">
              O sabor de um mel não nasce apenas da florada. Ele também carrega sinais do clima, da vegetação, da altitude e do tempo das abelhas.
            </p>
            <p className="font-sans text-sm md:text-base text-white/95 leading-relaxed font-normal">
              Na AION, chamamos isso de terroir: a assinatura natural de uma origem. É por isso que cada safra pode apresentar cor, aroma, textura e cristalização próprios.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs tracking-wider uppercase text-[#E7D6A7] font-semibold">
                Floradas naturais &middot; Pequena escala &middot; Safra com identidade própria
              </span>
            </div>

            {/* Premium CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar pote AION Safra 01 pelo WhatsApp"
                className="inline-flex justify-center items-center px-6 py-3.5 bg-[#C9A04B] text-[#143126] font-semibold tracking-wide text-xs uppercase hover:bg-white transition-all duration-300"
              >
                Reservar meu pote da Safra 01
              </a>
              <a 
                href="#safra-01"
                aria-label="Ver ficha técnica da Safra 01"
                className="inline-flex justify-center items-center px-6 py-3.5 border border-white/20 text-white font-semibold tracking-wide text-xs uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Ver ficha da Safra 01
              </a>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 space-y-6 text-left">
            <span className="font-mono text-[9px] tracking-widest text-[#C9A04B] uppercase block font-bold">ASSINATURA BOTÂNICA</span>
            <h3 className="font-serif text-2xl text-white font-light">
              Flora de Altitude
            </h3>
            <p className="font-sans text-sm text-[#F5F2EA]/90 leading-relaxed font-normal">
              A Safra 01 expressa uma combinação específica de floradas, clima e ciclo natural das colmeias. O resultado é um mel com identidade própria — não padronizado, não repetível e conectado à sua origem.
            </p>
            <div className="h-[1px] bg-white/10" />
            <span className="block text-xs italic text-[#E7D6A7] font-medium">
              &ldquo;O sabor muda porque a origem muda.&rdquo;
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 5 (Produção Artesanal em Permapicultura/Sustentabilidade) */}
      <section id="permapicultura" className="py-24 bg-[#F5F1E8] px-4 sm:px-6 md:px-12 lg:px-24 border-t border-b border-[#C9A04B]/15 scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Main header layout */}
          <div className="max-w-4.5xl text-left space-y-5">
            <span className="block font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-[#C9A04B] font-extrabold uppercase">
              Permapicultura & Baixa Intervenção
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl text-[#143126] font-extrabold tracking-tight leading-[1.1]">
              Permapicultura: o cuidado que chega ao pote
            </h2>
            <p className="font-serif text-xl sm:text-2.5xl text-[#C9A04B] font-medium italic tracking-wide leading-relaxed">
              A forma como o mel é produzido influencia sua origem, textura, aroma e identidade. Na AION, produzir menos é uma escolha para preservar melhor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Visual element on left side - Editorial photography showing bee on wild forest flowers */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative group overflow-hidden border-2 border-[#C9A04B]/25 shadow-2xl bg-white aspect-[4/5] w-full">
                <img 
                  src={permapiculturaBrandImage} 
                  alt="Abelha sobre flor em ambiente natural"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-[0.97]"
                />
                
                {/* Elegant gold corner accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C9A04B]/60" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C9A04B]/60" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#C9A04B]/60" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#C9A04B]/60" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#143126]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-left">
                  <p className="font-serif text-sm italic font-light">
                    &ldquo;A colheita acompanha o tempo natural das colmeias&rdquo;
                  </p>
                </div>
              </div>

              {/* Botanical single leaf decoration */}
              <div className="flex items-center gap-3.5 px-4 py-3 bg-[#143126]/5 border border-[#143126]/12 text-left">
                <BotanicalSingleLeaf className="w-6 h-6 text-[#C9A04B] shrink-0" />
                <p className="font-sans text-[11px] text-[#143126] font-bold uppercase tracking-wider leading-relaxed">
                  Colheita consciente • Proteção integral das colmeias nativas
                </p>
              </div>
            </div>

            {/* Explanation and the 3 Pillars in simple cards */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <div className="space-y-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#143126] uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#C9A04B] rounded-full inline-block" />
                  Por que isso importa para o mel que chega até mim?
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#2B2B2B]/95 leading-relaxed font-normal">
                  AION nasce de uma prática de baixa intervenção. A colheita respeita o tempo das abelhas, a disponibilidade real do excedente e o equilíbrio natural do território. Isso importa porque o mel que chega ao pote preserva melhor a história da florada, do clima e daquele ciclo específico da natureza.
                </p>
              </div>

              {/* The 3 Pillars */}
              <div className="space-y-4 pt-2">
                
                {/* Card 1 */}
                <div className="bg-white border border-[#C9A04B]/20 hover:border-[#C9A04B]/50 p-5 shadow-sm relative transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C9A04B]" />
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-serif text-lg font-extrabold text-[#143126]">1. Menos pressa, mais origem</span>
                    <span className="font-mono text-[9px] tracking-wider text-[#C9A04B] font-extrabold uppercase bg-[#143126]/5 px-2 py-0.5 rounded-none">Tempo</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed">
                    A produção acompanha o ritmo das colmeias, sem forçar volume. O resultado é um mel mais conectado ao tempo natural da safra.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-[#C9A04B]/20 hover:border-[#C9A04B]/50 p-5 shadow-sm relative transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C9A04B]" />
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-serif text-lg font-extrabold text-[#143126]">2. Colheita com critério</span>
                    <span className="font-mono text-[9px] tracking-wider text-[#C9A04B] font-extrabold uppercase bg-[#143126]/5 px-2 py-0.5 rounded-none">Sustento</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed">
                    O mel é retirado respeitando a disponibilidade real do excedente. A prioridade é manter o equilíbrio ecológico das abelhas, não maximizar a produção comercial.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-[#C9A04B]/20 hover:border-[#C9A04B]/50 p-5 shadow-sm relative transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C9A04B]" />
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-serif text-lg font-extrabold text-[#143126]">3. Território preservado no sabor</span>
                    <span className="font-mono text-[9px] tracking-wider text-[#C9A04B] font-extrabold uppercase bg-[#143126]/5 px-2 py-0.5 rounded-none">Identidade</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed">
                    Flores, clima, abelhas e ambiente influenciam diretamente cor, aroma, textura e cristalização. Cada safra carrega os sinais exatos do terroir de onde veio.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* BLOCK "O QUE CHEGA ATÉ VOCÊ" */}
          <div className="bg-[#143126] text-white border-2 border-[#C9A04B]/35 p-6 sm:p-8 relative overflow-hidden shadow-xl">
            {/* Elegant watermark */}
            <div className="absolute -right-10 -bottom-10 text-[#C9A04B]/10 pointer-events-none z-0">
              <BotanicalLogoMark className="w-48 h-48" />
            </div>
            
            <div className="max-w-4xl relative z-10 text-left space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#C9A04B] uppercase font-black">
                  A Promessa de Pureza AION
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2.5xl text-[#E7D6A7] font-semibold tracking-wide">
                O que chega até você não é apenas mel.
              </h4>
              <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl font-light">
                É uma safra com identidade própria: produzida em pequena escala, com baixa intervenção e respeito ao ciclo natural das abelhas.
              </p>
            </div>
          </div>

          {/* CTA OF THE SECTION */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-[#C9A04B]/15">
            <a
              href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label="Reservar pote AION pelo WhatsApp"
              className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#143126] hover:bg-[#C9A04B] text-white font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl shadow-[#143126]/12 group cursor-pointer hover:scale-[1.02] active:scale-98 w-full sm:w-auto"
            >
              Reservar meu pote pelo WhatsApp <ArrowRight className="w-4 h-4 text-[#C9A04B] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#safra-01"
              aria-label="Ver ficha técnica da Safra 01"
              className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#143126]/15 hover:bg-[#F5F2EA] text-[#143126] font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:border-[#143126]/35 w-full sm:w-auto"
            >
              Ver ficha da Safra 01
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5.5 (O Caminho do Mel - Comparativo) */}
      <section id="o-caminho" className="py-24 bg-[#FAF7F0] px-4 sm:px-6 md:px-12 lg:px-24 scroll-mt-24 sm:scroll-mt-28 border-b border-[#C9A04B]/15">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="max-w-4xl text-left space-y-4">
            <span className="block font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-[#C9A04B] font-extrabold uppercase">
              Dois Caminhos, Duas Experiências
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4xl text-[#143126] font-extrabold tracking-tight leading-[1.1]">
              O caminho do mel até o pote faz diferença
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2B2B2B]/95 leading-relaxed font-normal max-w-3xl">
              AION não nasce para padronizar o mel, mas para preservar a identidade de cada colheita. Cada escolha importa: o terroir, a baixa intervenção e o respeito ao ritmo das abelhas.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Caminho AION (Highlighted) */}
            <div className="bg-white border-2 border-[#C9A04B] p-5 xs:p-8 sm:p-10 shadow-lg relative flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px]">
              
              {/* Premium Top badge */}
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#C9A04B] text-[#143126] font-mono text-[9px] tracking-[0.2em] font-extrabold uppercase py-1 px-3">
                Lote Limitado
              </div>

              <div className="space-y-6">
                <div className="space-y-1.5">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#C9A04B] uppercase font-bold block">Escolha de Origem</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#143126] font-extrabold tracking-tight">
                    Caminho AION
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3.5">
                  {[
                    "Produção em pequena escala",
                    "Origem identificada",
                    "Baixa intervenção",
                    "Safra com características próprias",
                    "Cristalização natural preservada",
                    "Registro de lote e origem"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A04B] shrink-0 mt-0.5" />
                      <span className="font-sans text-sm sm:text-base text-[#143126] font-bold leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom text */}
              <div className="pt-6 mt-8 border-t border-[#C9A04B]/20 text-left">
                <p className="font-serif text-sm sm:text-base text-[#143126] italic font-medium leading-relaxed">
                  O que chega até você é um mel com identidade de safra: cor, aroma, textura e cristalização que expressam aquele ciclo natural específico.
                </p>
              </div>
            </div>

            {/* Produção Padronizada */}
            <div className="bg-white border border-[#143126]/12 p-5 xs:p-8 sm:p-10 shadow-sm relative flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px]">
              
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#143126]/50 uppercase font-bold block">Alta Escala</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#143126]/80 font-extrabold tracking-tight">
                    Produção padronizada
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3.5">
                  {[
                    "Produção orientada à escala",
                    "Origens diversas",
                    "Processos voltados à estabilidade",
                    "Perfil mais uniforme entre lotes",
                    "Padronização de textura e aparência",
                    "Menor vínculo com uma safra específica"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 opacity-75">
                      <div className="w-2 h-2 rounded-full bg-[#143126]/30 shrink-0 mt-2" />
                      <span className="font-sans text-sm sm:text-base text-[#2B2B2B] font-normal leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom text */}
              <div className="pt-6 mt-8 border-t border-[#143126]/10 text-left">
                <p className="font-serif text-sm sm:text-base text-[#2B2B2B]/80 italic leading-relaxed">
                  O que chega até você é um mel mais uniforme, pensado para constância, distribuição e previsibilidade entre diferentes lotes.
                </p>
              </div>
            </div>

          </div>

          {/* Destaque "O que muda para você?" */}
          <div className="bg-[#143126] text-white border-2 border-[#C9A04B]/35 p-6 sm:p-10 relative overflow-hidden shadow-xl">
            {/* Elegant watermark */}
            <div className="absolute -left-10 -bottom-10 text-[#C9A04B]/10 pointer-events-none z-0">
              <BotanicalLogoMark className="w-48 h-48" />
            </div>
            
            <div className="max-w-4xl relative z-10 text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A04B]" />
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#C9A04B] uppercase font-black">
                  O Impacto no seu Paladar
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2.5xl text-[#E7D6A7] font-semibold tracking-wide">
                O que muda para você?
              </h4>
              <p className="font-sans text-sm sm:text-base text-white/95 leading-relaxed max-w-3xl font-light">
                Mais do que um alimento doce, AION entrega uma safra com identidade própria: origem conhecida, pequena escala, baixa intervenção e características naturais preservadas até o pote.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-[#C9A04B]/15">
            <a
              href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label="Reservar pote AION pelo WhatsApp"
              className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#143126] hover:bg-[#C9A04B] text-white font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl shadow-[#143126]/12 group cursor-pointer hover:scale-[1.02] active:scale-98 w-full sm:w-auto"
            >
              Reservar meu pote pelo WhatsApp <ArrowRight className="w-4 h-4 text-[#C9A04B] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#mel-de-origem"
              aria-label="Entender o diferencial do Mel de Origem"
              className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#143126]/15 hover:bg-[#F5F2EA] text-[#143126] font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:border-[#143126]/35 w-full sm:w-auto"
            >
              Entender o Mel de Origem
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 6 (O que define o nosso Mel de Origem?) */}
      <section id="mel-de-origem" className="py-24 bg-white px-4 sm:px-6 md:px-12 lg:px-24 border-t border-b border-[#C9A04B]/15 scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Golden Honey Texture Image banner - Pure Dynamism */}
            <div className="lg:col-span-12 xl:col-span-5 relative group overflow-hidden border border-[#C9A04B]/20 shadow-2xl bg-[#F5F1E8]/50 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full">
              <img 
                src={honeyDrippingSpoon} 
                alt="Pote AION Safra 01 com mel de origem e colher de mel escorrendo"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[1200ms] ease-out brightness-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#143126]/95 via-[#143126]/40 to-transparent p-6 text-white text-left">
                <p className="font-serif text-md sm:text-lg font-light italic leading-snug">
                  &ldquo;A verdade botânica preservada em sua densidade e essência.&rdquo;
                </p>
              </div>
              {/* Fine gold corner marks */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-[#C9A04B]/50" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-[#C9A04B]/50" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-[#C9A04B]/50" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-[#C9A04B]/50" />
            </div>

            {/* Right side: Explanatory blocks */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-10 text-left border-0">
              <div className="space-y-4">
                <span className="block font-sans text-xs tracking-[0.25em] text-[#C9A04B] uppercase font-bold">ORIGEM E INTEGRIDADE</span>
                <h2 className="font-serif text-3.5xl md:text-5xl text-[#143126] font-normal tracking-tight">
                  O que define o nosso Mel de Origem?
                </h2>
                <p className="font-sans text-sm md:text-base text-[#2B2B2B]/95 leading-relaxed font-normal">
                  Muitos méis comerciais são padronizados para escala, estabilidade e aparência uniforme. AION segue outro caminho: preserva as características naturais da colheita, respeitando textura, aroma, cristalização e variações entre safras.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Point 1 */}
                <div className="flex gap-4 p-5 border border-[#C9A04B]/10 hover:border-[#C9A04B]/35 transition-colors bg-[#F5F1E8]/10 rounded-none">
                  <div className="font-serif text-3.5xl text-[#C9A04B] font-bold leading-none select-none">01</div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg text-[#143126] font-bold">Não aquecido</h3>
                    <p className="font-sans text-sm text-[#2B2B2B]/90 leading-relaxed font-normal">
                      Sem aquecimento intenso, preservando características naturais do mel e seus aromas originais.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4 p-5 border border-[#C9A04B]/10 hover:border-[#C9A04B]/35 transition-colors bg-[#F5F1E8]/10 rounded-none">
                  <div className="font-serif text-3.5xl text-[#C9A04B] font-bold leading-none select-none">02</div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg text-[#143126] font-bold">Não ultrafiltrado</h3>
                    <p className="font-sans text-sm text-[#2B2B2B]/90 leading-relaxed font-normal">
                      Filtragem cuidadosa, apenas para remoção de impurezas maiores, mantendo a identidade natural da colheita.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4 p-5 border border-[#C9A04B]/10 hover:border-[#C9A04B]/35 transition-colors bg-[#F5F1E8]/10 rounded-none">
                  <div className="font-serif text-3.5xl text-[#C9A04B] font-bold leading-none select-none">03</div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg text-[#143126] font-bold">Variação natural</h3>
                    <p className="font-sans text-sm text-[#2B2B2B]/90 leading-relaxed font-normal">
                      Cor, aroma, textura e cristalização podem variar naturellement. Isso não é defeito: é o sinal mais autêntico de origem e de lote intocado.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7 (Ficha da Safra 01) */}
      <section id="safra-01" className="py-24 bg-[#F5F1E8] px-4 sm:px-6 md:px-12 lg:px-24 scroll-mt-24 sm:scroll-mt-28 border-b border-[#C9A04B]/15">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="max-w-4.5xl text-left space-y-5">
            <span className="block font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-[#C9A04B] font-extrabold uppercase">
              Origem, Processo e Envase
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4xl md:text-5xl text-[#143126] font-extrabold tracking-tight leading-[1.1]">
              Ficha da Safra 01
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2B2B2B]/95 leading-relaxed font-normal max-w-4xl">
              Cada lote AION possui um registro simples de origem, processo e envase. Uma forma transparente de preservar a história da colheita até o pote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* BLOCO 1 — Ficha da Safra */}
            <div className="lg:col-span-6 bg-white border-2 border-[#C9A04B]/20 p-6 sm:p-10 relative shadow-xl">
              {/* Luxury botanical drawing style framing */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#C9A04B]/10 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-[#C9A04B]/20">
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#C9A04B] uppercase font-bold">Rastreamento de Lote</span>
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.1em] text-[#143126] font-bold bg-[#F5F1E8] px-3 py-1 border border-[#C9A04B]/20">REGISTRO INTEGRAL</span>
                </div>
                
                <div className="space-y-1">
                  {[
                    { label: "Produto", value: "Mel de Origem AION" },
                    { label: "Safra", value: "01" },
                    { label: "Lote", value: "01" },
                    { label: "Peso", value: "500g" },
                    { label: "Envase", value: "Junho de 2026" },
                    { label: "Validade", value: "Junho de 2027" },
                    { label: "Processo", value: "Não aquecido e não ultrafiltrado" },
                    { label: "Produção", value: "Pequena escala" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 sm:py-3 border-b border-[#C9A04B]/10 last:border-b-0">
                      <span className="font-mono text-xs sm:text-sm uppercase text-[#143126]/75 tracking-wider font-extrabold">{item.label}</span>
                      <span className="font-serif text-[15px] sm:text-lg text-[#143126] font-extrabold text-right ml-4 leading-normal">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOCO 2 — Lote limitado */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#143126]/5 border border-[#143126]/12 text-[#104e35]">
                  <BotanicalSingleLeaf className="w-4 h-4 text-[#C9A04B] shrink-0" />
                  <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-[#143126]">REGISTRO DE ORIGEM DO LOTE</span>
                </div>
                
                <h3 className="font-serif text-2.5xl sm:text-3.5xl text-[#143126] font-extrabold tracking-tight">
                  Lote limitado da Safra 01
                </h3>
                
                <p className="font-sans text-sm sm:text-base text-[#2B2B2B]/95 leading-relaxed">
                  AION é produzido em pequena escala, respeitando o tempo das colmeias e a disponibilidade real da colheita. Por isso, a Safra 01 está disponível apenas enquanto houver unidades reserváveis.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#143126]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A04B] shrink-0" />
                    <span className="font-sans font-medium text-[#2B2B2B]/90">Edição limitada com identificação de lote.</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#143126]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A04B] shrink-0" />
                    <span className="font-sans font-medium text-[#2B2B2B]/95 flex items-center gap-1.5">
                      Disponibilidade: <span className="font-bold text-[#143126] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" /> Confirmada pelo WhatsApp</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#143126] hover:bg-[#C9A04B] text-white font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl shadow-[#143126]/12 group cursor-pointer hover:scale-[1.02] active:scale-98 w-full sm:w-auto text-center"
                >
                  Reservar meu pote pelo WhatsApp <ArrowRight className="w-4 h-4 text-[#C9A04B] group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20Safra%2001%20do%20Mel%20AION."
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white border border-[#143126]/15 hover:bg-[#F5F2EA] text-[#143126] font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:border-[#143126]/35 w-full sm:w-auto text-center"
                >
                  Tirar dúvidas sobre a Safra 01
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Accordion component */}
      <FAQAccordion />

      {/* FINAL CALL TO ACTION */}
      <section className="py-28 bg-[#143126] px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden text-center">
        {/* Fine gold concentric guidelines overlay with new Bee Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <AionBeeIcon className="w-96 h-96 text-[#C9A04B]" color="#C9A04B" />
        </div>

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          
          <div className="inline-flex items-center justify-center mb-1">
            <BotanicalBranch className="w-16 h-16 text-[#C9A04B]" />
          </div>

          <h2 className="font-serif text-3.5xl sm:text-4xl md:text-6xl text-white font-normal tracking-tight max-w-2xl mx-auto leading-tight">
            Nenhuma safra se repete da mesma forma.
          </h2>

          <p className="font-serif text-xl text-[#C9A04B] italic font-light tracking-wide">
            Garanta sua fração do Mel de Origem AION.
          </p>

          <p className="font-sans text-sm md:text-base text-[#F5F2EA]/90 leading-relaxed max-w-lg mx-auto font-normal">
            Produção limitada em pequena escala, respeitando o ciclo natural das abelhas. Lote estritamente limitado disponível apenas pelo WhatsApp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto w-full">
            <a
              href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label="Reservar meu pote AION pelo WhatsApp"
              className="px-8 py-4 bg-[#C9A04B] hover:bg-[#DCC38A] text-[#143126] font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl shadow-black/20 text-center cursor-pointer w-full sm:w-auto"
            >
              Reservar meu pote pelo WhatsApp
            </a>
            
            <a
              href="#safra-01"
              aria-label="Ver Ficha Técnica da Safra 01"
              className="px-8 py-4 bg-transparent border border-white/25 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 text-center w-full sm:w-auto"
            >
              Ver Ficha da Safra
            </a>
          </div>

          <div className="pt-6 space-y-1 text-center font-mono text-[10px] tracking-wider text-white/50 uppercase">
            <p>Atendimento Comercial no WhatsApp: (41) 99908-1569</p>
            <p className="text-[#C9A04B] font-bold">Safra 01 • Lote 01 • Pote 500g • Disponibilidade limitada</p>
          </div>

        </div>
      </section>

      {/* Footer component */}
      <Footer />

      {/* Sticky Mobile CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#143126]/95 backdrop-blur-md border-t border-[#C9A04B]/20 p-3 flex sm:hidden items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col text-left pl-1">
          <span className="font-serif text-[13px] tracking-wide text-[#C9A04B] font-bold leading-tight">AION Safra 01</span>
          <span className="font-sans text-[8px] tracking-wider text-white/70 uppercase leading-none mt-1">Lote Limitado • Pote 500g</span>
        </div>
        <a
          href="https://wa.me/5541999081569?text=Ol%C3%A1%2C%20quero%20reservar%201%20pote%20da%20AION%20Safra%2001.%20Meu%20nome%20%C3%A9%20_____.%20Gostaria%20de%20confirmar%20disponibilidade%2C%20valor%20e%20forma%20de%20entrega."
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center gap-1.5 px-4.5 py-2.5 bg-[#C9A04B] hover:bg-[#DCC38A] text-[#143126] font-sans text-[10px] uppercase tracking-widest font-extrabold shadow-md transition-all duration-300"
        >
          <Phone className="w-3.5 h-3.5" /> Reservar
        </a>
      </div>

    </div>
  );
}
