"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const consumerProblems = [
  {
    title: "Problemas com Produtos",
    items: [
      "Produtos com defeito ou má qualidade",
      "Entrega de produto diferente do anunciado",
      "Problemas com garantia",
      "Atraso ou não entrega de produtos",
      "Produtos falsificados ou irregulares"
    ]
  },
  {
    title: "Questões Contratuais",
    items: [
      "Contratos abusivos de consumo",
      "Cancelamento de serviços",
      "Mudança unilateral de contrato",
      "Descumprimento de ofertas",
      "Problemas com garantia estendida"
    ]
  },
  {
    title: "Cobranças e Pagamentos",
    items: [
      "Cobranças indevidas ou abusivas",
      "Negativação irregular",
      "Juros e multas excessivos",
      "Cobrança de serviços não solicitados",
      "Problemas com cartão de crédito"
    ]
  },
  {
    title: "Serviços",
    items: [
      "Má prestação de serviços",
      "Serviços não realizados",
      "Orçamentos não respeitados",
      "Problemas com garantia de serviços",
      "Atrasos injustificados"
    ]
  }
];

export function ProblemsSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado especialista em Direito do Consumidor. Tenho um problema que preciso resolver. Pode me ajudar?"
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary animate-fade-in">
          Problemas que Resolvemos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Identificamos e solucionamos as principais questões relacionadas ao Direito do Consumidor que nossos clientes enfrentam
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {consumerProblems.map((problem, index) => (
            <Card 
              key={index}
              className="p-6 hover-scale animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-secondary h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {problem.title}
                  </h3>
                  <ul className="space-y-2">
                    {problem.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white hover-scale"
          >
            <MessageCircle className=" mx-auto" />
            Resolver Meu Problema de Agora
          </Button>
        </div>
      </div>
    </section>
  );
}