
import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const Services: React.FC = () => {
  const { mode } = useTheme();
  return (
    <section id="servicos" className="py-24 bg-[var(--color-bg-alt)]" aria-labelledby="servicos-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="servicos-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Advocacia Especializada em Dívidas e Defesa do Consumidor</h2>
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
            <div key={idx} className={`group flex flex-col justify-between p-8 rounded-2xl shadow-lg transition-all border ${mode === 'clear' ? 'bg-white border-[var(--color-success)]/30' : 'bg-[var(--color-card)] border-[var(--color-border)]/30'}`}>
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow ${mode === 'clear' ? 'bg-white border border-[var(--color-success)]/40' : 'bg-[var(--color-cardElevated)] border border-[var(--color-success)]/40'}`} >
                  <CheckCircle2 style={{ color: 'var(--color-success)' }} size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>{service}</h3>
              </div>
              <button className={`mt-8 font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform focus-visible:ring-2 ${mode === 'clear' ? 'text-[var(--color-success)]' : 'text-white/90'}`} style={mode === 'clear' ? {} : { background: 'rgba(0,217,105,0.08)', borderRadius: 8, padding: '8px 16px' }}>
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
