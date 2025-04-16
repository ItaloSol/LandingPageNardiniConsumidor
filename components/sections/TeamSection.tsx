"use client";

import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, Award, GraduationCap, BookOpen } from "lucide-react";
import Image from "next/image";

const lawyers = [
  {
    name: "Dr. Sidnei Paulo Nardini",
    oab: "264.627",
    education: [
      "Graduado em Direito pela Universidade Noroeste Paulista - Unorp",
      "Especialização em Direito Civil e Processo Civil",
      "Mais de 18 anos de experiência em advocacia"
    ],
    description: "Advogado especialista em Direito Civil e Direito do Consumidor, com vasta experiência em questões Imobiliárias, Família e Sucessões e Empresariais. Contando com advogados auxiliares e parceiros nas áreas previdenciária e trabalhista. Comprometido com a excelência jurídica e a defesa dos interesses de seus clientes, atua de forma estratégica e personalizada em cada caso.",
    image: "/images/Sidnei.webp",
    specialties: [
      "Direito Civil",
      "Direito de Família",
      "Direito Imobiliário",
      "Direito Empresarial"
    ],
    achievements: [
      "Mais de 1000 casos atendidos com sucesso",
      "Especialista em resolução de conflitos",
      "Reconhecido pela atuação em casos complexos"
    ],
    icon: <Scale className="h-6 w-6" />
  }
];

export function TeamSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-fade-in">
            O Advogado Especialista
          </h2>
          <p className="text-gray-600 text-center mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Profissionalismo, ética e excelência jurídica a serviço dos nossos clientes
          </p>

          <div className="max-w-6xl mx-auto">
            {lawyers.map((lawyer, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover-scale animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-auto">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden" />
                    <div className="absolute bottom-0 left-0 p-6 md:hidden">
                      <div className="flex items-center gap-2 text-white mb-2">
                        {lawyer.icon}
                        <span className="text-sm font-medium">OAB/SP {lawyer.oab}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-1">{lawyer.name}</h3>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-8">
                    <div className="hidden md:block mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        {lawyer.icon}
                        <span className="text-sm font-medium text-secondary">OAB/SP {lawyer.oab}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-primary">{lawyer.name}</h3>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold text-primary">Formação Acadêmica</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        {lawyer.education.map((edu, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold text-primary">Sobre</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{lawyer.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Scale className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold text-primary">Áreas de Atuação</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {lawyer.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold text-primary">Conquistas</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        {lawyer.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}