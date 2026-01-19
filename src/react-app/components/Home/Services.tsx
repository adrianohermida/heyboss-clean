
import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const Services: React.FC = () => {
  const { mode } = useTheme();
  const bg = mode === 'clear' ? 'bg-brand-secondary' : 'bg-brand-dark';
  const text = mode === 'clear' ? 'text-gray-900' : 'text-white';
  const textSub = mode === 'clear' ? 'text-brand-dark/60' : 'text-white/60';
  const cardBg = mode === 'clear' ? 'bg-[var(--color-cardElevated)] border border-gray-200 shadow-xl' : 'bg-[var(--color-card)] border border-white/10 shadow-xl';
  return (
    <section id="servicos" className={`py-24 ${bg}`} aria-labelledby="servicos-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="servicos-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-brand)] mb-4">Advocacia Especializada em Dívidas e Defesa do Consumidor</h2>
          <p className="text-lg text-[var(--color-text)]/80">Soluções jurídicas completas para defesa do consumidor, acordo judicial e fim das cobranças abusivas.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Defesa Contra Juros Abusivos e Cobranças Ilegais",
            "Superendividamento Lei 14.181/2021 - Renegociação de Dívidas",
            "Recuperação Judicial e Extrajudicial de Empresas",
            "Acordos Extrajudiciais com Credores e Instituições Financeiras",
            "Representação Junto ao BACEN e Órgãos de Defesa do Consumidor",
            "Defesa Contra Fraudes Bancárias e Golpes Pix"
          ].map((service, idx) => (
            <div key={idx} className={`group ${cardBg} p-8 rounded-2xl hover:border-[var(--color-accent)] transition-all flex flex-col justify-between`}>
              <div className="space-y-4">
                <div className="bg-[var(--color-accent)]/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
                  <CheckCircle2 className="text-[var(--color-accent)] group-hover:text-white" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-brand)] leading-tight">{service}</h3>
              </div>
              <button className="mt-8 text-[var(--color-accent)] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
                Saiba mais <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
