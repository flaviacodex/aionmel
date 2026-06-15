import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mockFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como faço para reservar a Safra 01?",
    answer: "A reserva é feita diretamente pelo WhatsApp. Basta clicar nos botões de reserva espalhados pelo site para iniciar o atendimento, onde confirmamos a disponibilidade e organizamos a entrega e o pagamento de forma personalizada."
  },
  {
    id: "faq-2",
    question: "Qual é o peso do pote?",
    answer: "Cada pote da Safra 01 contém 500g de puro mel silvestre cru selvagem. Uma quantidade pensada para valorizar a exclusividade de cada colheita."
  },
  {
    id: "faq-3",
    question: "Como é feita a entrega e qual o valor do frete?",
    answer: "Enviamos para todo o Brasil em embalagem protetora reforçada para garantir que seu pote chegue intacto. O valor do frete e o prazo de entrega são calculados individualmente e informados durante o atendimento personalizado no WhatsApp."
  },
  {
    id: "faq-4",
    question: "Quais formas de pagamento estão disponíveis?",
    answer: "Aceitamos Pix e as principais bandeiras de cartão de crédito. Todo o processo de reserva e confirmação do pagamento é finalizado com agilidade e total segurança diretamente no suporte."
  },
  {
    id: "faq-5",
    question: "Qual é a validade?",
    answer: "Por ser mel cru puro e de baixíssima umidade, o mel de origem não estraga e tem validade indeterminada. No entanto, por questões de regulamentação, indicamos em nossa etiqueta o período recomendado de consumo de 1 ano a partir do envase."
  },
  {
    id: "faq-6",
    question: "Como devo armazenar?",
    answer: "Mantenha em local seco, fresco e protegido da luz solar direta. Não há necessidade de guardar na geladeira, pois temperaturas frias aceleram o processo de cristalização natural."
  },
  {
    id: "faq-7",
    question: "O mel cristalizou. Isso é normal?",
    answer: "Sim, é o maior sinal de pureza. A cristalização é um processo físico natural que ocorre no mel puro e cru, pois as características originais das floradas foram preservadas sem superaquecimento industrial. Para torná-lo líquido novamente, basta aquecer o pote em banho-maria morno (até 40°C) por alguns minutos."
  },
  {
    id: "faq-8",
    question: "Por que a Safra 01 é tão limitada?",
    answer: "Respeitamos o ciclo biológico natural das abelhas e as restrições climáticas de cada ciclo anual. A colheita é feita de forma artesanal em pequena escala apenas sobre o excedente real. Uma vez esgotado este lote de colheita outonal, novas unidades só estarão disponíveis no próximo ano."
  },
  {
    id: "faq-9",
    question: "O que define um Mel de Origem?",
    answer: "É um mel com rastreabilidade total, de baixa intervenção e sem misturas de múltiplos produtores ou mel de outras floradas. Enquanto o mercado industrial padroniza sabores, o Mel de Origem AION preserva puras as assinaturas botânicas, o aroma e a textura autêntica do território serrano."
  }
];

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-24 bg-aion-light px-6 md:px-12 lg:px-24 border-t border-aion-gold/25 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="block font-sans text-xs tracking-[0.25em] text-aion-gold uppercase mb-2">Esclarecimentos</span>
          <h2 className="font-serif text-3xl md:text-5xl text-aion-green font-normal tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm text-aion-dark/65 mt-3">
            Para compreender o comportamento natural e o valor de um mel de origem em pequena escala.
          </p>
        </div>

        <div className="space-y-4">
          {mockFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="border border-aion-gold/20 bg-white transition-all duration-300"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center bg-transparent hover:bg-aion-light/30 transition-all duration-300"
                >
                  <span className="font-serif text-lg md:text-xl text-aion-green font-medium pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-aion-gold shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-aion-gold/10 pt-4 font-sans text-sm md:text-base text-aion-dark/75 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
