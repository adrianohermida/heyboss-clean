import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const items = [
  {
    icon: Target,
    title: 'Missão',
    desc: 'Soluções jurídicas inovadoras para libertar consumidores do superendividamento, garantindo dignidade e paz financeira.'
  },
  {
    icon: Eye,
    title: 'Visão',
    desc: 'Ser referência nacional na defesa do consumidor endividado, reconhecido pela excelência técnica e ética.'
  },
  {
    icon: Heart,
    title: 'Valores',
    desc: 'Ética, transparência, empatia e compromisso com a justiça social e o mínimo existencial.'
  }
];

const MissionVisionValues: React.FC = () => (
  <section className="py-16 bg-[var(--color-cardElevated)]">
    <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-[var(--color-white)] p-6 rounded-2xl border border-[var(--color-border)]/20 shadow-lg hover:border-[var(--color-success)]/40 transition-all group">
          <div className="bg-[var(--color-success)]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <item.icon className="text-[var(--color-success)]" size={28} />
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-success)' }}>{item.title}</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-brand)' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MissionVisionValues;
