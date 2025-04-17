"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  AlertCircle, 
  MessageCircle,
  Receipt,
  CircleAlert,
  Instagram,
  BadgeAlert
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const consumerLawItems = [
  {
    title: "Regularização de Crédito - Limpe Seu Nome",
    description: "Regularização de problemas junto aos órgãos de proteção ao crédito.",
    icon: <Receipt className="h-5 w-5 text-secondary" />,
    details: [
      "Nome indevidamente negativado",
      "Pagou sua dívida e continua com o nome negativado",
      "Restrição Interna – Bancos/Registrato",
      "Análise da situação creditícia",
      "Contestação de negativações indevidas"
    ]
  },
  {
    title: "Descontos Indevidos no Benefício do INSS",
    description: "Análise e contestação de descontos não autorizados em benefícios previdenciários.",
    icon: <AlertCircle className="h-5 w-5 text-secondary" />,
    details: [
      "Empréstimo sobre RMC ou Reserva de Margem Consignável",
      "Empréstimos Consignados desconhecidos",
      "Descontos de contribuição de Associações e Sindicatos",
      "Verificação da legalidade dos descontos",
      "Recuperação de valores descontados indevidamente"
    ]
  },
  {
    title: "Instagram Hackeado",
    description: "Atuação rápida para recuperação de contas e responsabilização dos envolvidos.",
    icon: <Instagram className="h-5 w-5 text-secondary" />,
    details: [
      "Recuperação de perfis invadidos",
      "Ação contra golpes aplicados (PIX, Investimentos)",
      "Golpes de venda de produtos",
      "Pedido antecipado para recuperação da conta",
      "Reparação por danos morais causados"
    ]
  }
];

interface PracticeAreaItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

interface PracticeAreaProps {
  title: string;
  description: string;
  items: PracticeAreaItem[];
  animationDelay?: number;
}

function PracticeArea({ title, description, items, animationDelay = 0 }: PracticeAreaProps) {
  const [openCards, setOpenCards] = useState({});
  const { ref: areaRef, isVisible: areaIsVisible } = useScrollReveal();

  return (
    <div 
      ref={areaRef as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${areaIsVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Card className="h-full p-4 md:p-8 bg-gradient-to-br from-white to-primary-light/10 animate-fade-in max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-primary mb-6">
            <BadgeAlert size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {items.map((item: PracticeAreaItem, index: number) => (
            <Card 
              key={item.title}
              className="p-6 hover-scale animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.details.map((detail: string, idx: number) => (
                      <li 
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}

export function PracticeAreasSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com um advogado especialista em Direito do Consumidor. Pode me ajudar?"
    );
    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-fade-in">
            Áreas de Atuação
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Especializado em defender seus direitos nas relações de consumo, oferecendo suporte jurídico completo em questões envolvendo regularização de crédito, benefícios do INSS e fraudes digitais.
          </p>

          <PracticeArea
            title="Direito do Consumidor"
            description="Atendimento especializado em todas as questões relacionadas ao Direito do Consumidor, desde a análise preventiva até a resolução de conflitos."
            items={consumerLawItems}
            animationDelay={0.2}
          />

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white hover-scale"
            >
              <MessageCircle className="mr-2" />
              Consulte um Especialista em Direito do Consumidor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}