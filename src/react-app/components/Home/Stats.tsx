import React from 'react';
import { ShieldCheck, TrendingDown, Zap, Smile } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const Stats: React.FC = () => {
  const { mode } = useTheme();
  const bg = 'bg-[var(--color-bg-alt)]';
  const text = 'text-[var(--color-text)]';
  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Resultados Reais na Redução e Renegociação de Dívidas</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">Nossa advocacia especializada em dívidas foca em resultados reais para quem busca o fim das cobranças abusivas e a solução rápida para dívidas.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Proteção Legal", desc: "Blindagem contra cobranças abusivas e ameaças de credores com acordo judicial." },
            { icon: TrendingDown, title: "Redução de Dívidas", desc: "Cortes significativos no valor total através da Lei 14.181/2021." },
            { icon: Zap, title: "Solução Rápida", desc: "Processos otimizados para eliminar dívidas de forma definitiva e ágil." },
            { icon: Smile, title: "Tranquilidade", desc: "Recupere sua dignidade financeira com nossa consultoria jurídica especializada." }
          ].map((stat, idx) => (
            <div key={idx} className={`p-8 rounded-2xl transition-all group shadow-lg border hover:border-[var(--color-success)]/60 ${mode === 'clear' ? 'bg-white border-[var(--color-success)]/30' : 'bg-[var(--color-card)] border-[var(--color-border)]/30'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow ${mode === 'clear' ? 'bg-white border border-[var(--color-success)]/40' : 'bg-[var(--color-cardElevated)] border border-[var(--color-success)]/40'}`}>
                <stat.icon className="text-[var(--color-success)]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>{stat.title}</h3>
              <p className={`text-sm leading-relaxed ${mode === 'clear' ? 'text-[var(--color-text-secondary)]' : 'text-white/80'}`}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
