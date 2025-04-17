"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ProcessSection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:gap-12">
      {/* Left side text and button */}
      <section className="flex flex-col items-center text-center gap-6 md:w-1/3 md:sticky md:top-1/3">
        <h2 className="text-lg font-semibold text-gray-900 leading-tight">
          Processo <span className="text-yellow-700 font-semibold">simplificado</span> de atendimento e contratação
        </h2>
        <button
          type="button"
          onClick={() => {
            const message = encodeURIComponent(
              "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
            );
            window.open(`https://wa.me/5517997720489?text=${message}`, "_blank");
          }}
          className="flex items-center gap-2 bg-yellow-700 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-yellow-800 transition-colors"
        >
          <i className="fas fa-comment-alt"></i>
          Fale conosco
        </button>
      </section>

      {/* Vertical timeline with steps */}
      <section className="flex flex-col md:w-2/3 relative">
        {/* Vertical line */}
        <div className="absolute top-6 left-6 md:left-10 h-full border-l border-gray-300"></div>

        {/* Step 1 */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Passo 01</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Envie-nos uma mensagem e será direcionado para um atendimento direto com o advogado e que lhe dará as primeiras orientações.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Passo 02</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Após o contato e elucidado todas as dúvidas, e havendo o interesse na contratação, será solicitado seus dados e documentos.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Passo 03</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Após o envio será dado a continuidade do atendimento, com a confecção da documentação necessária e com posterior envio para colheita de assinatura nos documentos.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              <i className="fas fa-check text-gray-900 text-lg"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 max-w-xl w-full">
            <h3 className="font-semibold text-gray-900 mb-1">Passo 04</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Com a devolução dos documentos devidamente assinados, iniciaremos os trabalhos pactuados e lhe manteremos atualizado do andamento de seu processo nas etapas de distribuição, sentença, recursos e pagamentos e/ou se preferir poderá entrar diretamente em contato com o escritório solicitando informações.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}