
import React from 'react';
import { Calendar, Scale, Handshake, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const HowItWorks: React.FC = () => {
  const { mode } = useTheme();
  return (
    <section className="py-24 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>
            Como Funciona a Renegociação de Dívidas pela Lei 14.181/2021
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]/90">
            Um processo transparente e seguro para eliminar dívidas e recuperar sua liberdade financeira com consultoria jurídica especializada.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-border)]/10 -translate-y-1/2 z-0" />
          {[
            { icon: Calendar, title: "Agende uma Consulta", desc: "Conversamos sobre seu caso detalhadamente." },
            { icon: Scale, title: "Estratégia Jurídica", desc: "Analisamos todos os seus contratos e dívidas." },
            { icon: Handshake, title: "Negociação Especializada", desc: "Entramos em contato com os credores." },
            { icon: CheckCircle2, title: "Solução Definitiva", desc: "Plano de pagamento aprovado judicialmente." }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 text-center space-y-6 group bg-[var(--color-cardElevated)] rounded-3xl p-6 shadow-lg border border-[var(--color-success)]/30 transition-all">
              <div className="w-20 h-20 bg-white border border-[var(--color-success)]/40 rounded-3xl flex items-center justify-center mx-auto shadow">
                <step.icon className="text-[var(--color-success)]" size={36} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>{step.title}</h3>
                <p className="text-[var(--color-text)]/80 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
