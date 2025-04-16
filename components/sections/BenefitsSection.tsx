"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, MessageCircle, Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: <Scale className="h-12 w-12 text-primary" />,
    title: "Experiência Comprovada",
    description: "Anos de atuação com casos complexos e resultados expressivos"
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-primary" />,
    title: "Atendimento Personalizado",
    description: "Dedicação exclusiva ao seu caso com comunicação clara e direta"
  },
  {
    icon: <Building2 className="h-12 w-12 text-primary" />,
    title: "Estrutura Completa",
    description: "Equipe multidisciplinar preparada para todas as demandas"
  }
];

export function BenefitsSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-fade-in">
          Por Que Nos Escolher?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center animate-fade-in delay-300">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white hover-scale"
          >
            <MessageCircle className="mr-2" />
            Fale com Nossa Equipe
          </Button>
        </div>
      </div>
    </section>
  );
}