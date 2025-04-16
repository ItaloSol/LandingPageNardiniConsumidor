"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShieldAlert,
  MessageCircle,
  Scale,
  FileText,
  AlertCircle,
  Receipt,
  CircleAlert,
  ShoppingCart,
  Store,
  BadgeAlert
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const consumerLawItems = [
  {
    title: "Análise de Contratos de Consumo",
    description: "Avaliação detalhada de contratos e relações de consumo para proteção dos seus direitos.",
    icon: <FileText className="h-5 w-5 text-secondary" />,
    details: [
      "Análise de contratos de adesão",
      "Revisão de cláusulas abusivas",
      "Orientação sobre direitos do consumidor",
      "Avaliação de termos e condições",
      "Consultoria preventiva"
    ]
  },
  {
    title: "Produtos e Serviços Defeituosos",
    description: "Defesa em casos de produtos ou serviços com problemas de qualidade ou segurança.",
    icon: <ShoppingCart className="h-5 w-5 text-secondary" />,
    details: [
      "Vícios de produtos",
      "Falhas em serviços",
      "Garantia legal e contratual",
      "Recalls e segurança",
      "Reparação de danos"
    ]
  },
  {
    title: "Cobranças Indevidas",
    description: "Contestação de cobranças abusivas e valores indevidos.",
    icon: <Receipt className="h-5 w-5 text-secondary" />,
    details: [
      "Contestação de faturas",
      "Cobrança em duplicidade",
      "Taxas e juros abusivos",
      "Negativação indevida",
      "Renegociação de dívidas"
    ]
  },
  {
    title: "Práticas Abusivas",
    description: "Combate a práticas comerciais desleais e publicidade enganosa.",
    icon: <AlertCircle className="h-5 w-5 text-secondary" />,
    details: [
      "Publicidade enganosa",
      "Venda casada",
      "Práticas comerciais abusivas",
      "Assédio de consumo",
      "Discriminação no consumo"
    ]
  },
  {
    title: "Processos Administrativos",
    description: "Representação junto aos órgãos de defesa do consumidor.",
    icon: <Scale className="h-5 w-5 text-secondary" />,
    details: [
      "Processos no PROCON",
      "Reclamações administrativas",
      "Mediação de conflitos",
      "Acordos extrajudiciais",
      "Termos de ajustamento"
    ]
  },
  {
    title: "Ações Judiciais",
    description: "Representação em processos judiciais para defesa do consumidor.",
    icon: <BadgeAlert className="h-5 w-5 text-secondary" />,
    details: [
      "Ações individuais",
      "Ações coletivas",
      "Indenizações",
      "Tutelas de urgência",
      "Execução de acordos"
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
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});
  const { ref: areaRef, isVisible: areaIsVisible } = useScrollReveal();

  const toggleCard = (id: string) => {
    setOpenCards(prev => ({
      ...Object.keys(prev).reduce<Record<string, boolean>>((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
      [id]: !prev[id]
    }));
  };

  return (
    <div 
      ref={areaRef as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${areaIsVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Card className="h-full p-4 md:p-8 bg-gradient-to-br from-white to-primary-light/10 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-secondary">
            <ShieldAlert size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-gray-600 mb-8 text-lg">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCard(item.title)}
                    className="text-primary hover:bg-primary/10 flex items-center gap-1"
                  >
                    {openCards[item.title] ? 'Ver menos' : 'Ver mais'}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${openCards[item.title] ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                  {openCards[item.title] && (
                    <ul className="space-y-2 mt-2 animate-fade-in">
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
                  )}
                </div>
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
            Direito do Consumidor
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Especializado em defender seus direitos nas relações de consumo, oferecendo suporte jurídico completo em questões envolvendo produtos, serviços e práticas comerciais.
          </p>

          <PracticeArea
            title="Áreas de Atuação"
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
              <span className="hidden sm:inline">Consulte um Especialista em Direito do Consumidor</span>
              <span className="sm:hidden">Consulte um<br/>Especialista</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}