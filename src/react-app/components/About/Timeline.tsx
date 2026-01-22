import React from 'react';
import { History } from 'lucide-react';

const timeline = [
  { year: '2012', title: 'Início da Trajetória', desc: 'Graduação e primeiros passos na advocacia focada em direitos fundamentais.' },
  { year: '2015', title: 'Especialização Bancária', desc: 'Foco total em Direito Bancário e combate a práticas abusivas de instituições financeiras.' },
  { year: '2018', title: 'Fundação do Escritório', desc: 'Inauguração da Hermida Maia Advocacia com foco em atendimento humanizado e digital.' },
  { year: '2021', title: 'Lei do Superendividamento', desc: 'Liderança nacional na aplicação da Lei 14.181/2021, restaurando a dignidade de milhares.' },
  { year: '2024', title: 'Referência Nacional', desc: 'Mais de R$ 35 milhões renegociados e presença consolidada em todo o Brasil.' }
];

const Timeline: React.FC = () => (
  <section className="py-16 bg-[var(--color-cardElevated)]">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 px-4 py-2 rounded-full mb-2">
          <History size={16} className="text-[var(--color-success)]" />
          <span className="text-[var(--color-success)] text-xs font-bold uppercase tracking-widest">Nossa Jornada</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: 'var(--color-success)' }}>Linha do Tempo</h2>
        <p className="text-xs md:text-base max-w-2xl mx-auto" style={{ color: 'var(--color-brand)' }}>Uma trajetória dedicada à justiça e à proteção do consumidor brasileiro.</p>
      </div>
      <div className="space-y-8">
        {timeline.map((item, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full md:w-auto">
              <div className={`bg-[var(--color-white)] p-4 md:p-6 rounded-2xl border border-[var(--color-border)]/20 shadow-lg hover:border-[var(--color-success)]/40 transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-[var(--color-success)] font-black text-lg md:text-2xl mb-1 block">{item.year}</span>
                <h3 className="text-base md:text-xl font-bold" style={{ color: 'var(--color-success)' }}>{item.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--color-brand)' }}>{item.desc}</p>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-primary rounded-full border-4 border-brand-dark shadow-[0_0_8px_rgba(13,156,110,0.5)]" />
            </div>
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
