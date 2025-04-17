"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Problemas que Resolvemos", href: "#problemas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#hero" className="relative" title="Voltar ao topo">
            <div>
              <div>
                <Image
                  src="/images/logo-nav.webp"
                  alt="Nardini Advogados"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: '100%' }}
                  priority
                />
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
                );
                window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
              }}
              size="sm"
              className={`${
                isScrolled
                  ? "bg-primary hover:bg-primary-dark text-white"
                  : "bg-white text-primary hover:bg-primary-light"
              }`}
            >
              Fale com um Advogado
            </Button>
          </div>

          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 md:hidden">
              <div className="flex flex-col items-center justify-center h-full gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-primary hover:text-primary-dark"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
                    );
                    window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  Fale com um Advogado
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}