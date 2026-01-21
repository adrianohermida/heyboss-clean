import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProfileSection: React.FC = () => (
  <section className="py-16 bg-[var(--color-bg-alt)]">
    <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-full h-full border-2 border-[var(--color-brand-primary)]/20 rounded-2xl -z-10" aria-hidden />
        <img 
          src="https://heyboss.heeyo.ai/user-assets/541c30f0c__TLM9795_hxylPUVt.jpg" 
          alt="Dr. Adriano Hermida Maia" 
          className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-[var(--color-cardElevated)]/90 backdrop-blur p-4 rounded-xl border border-[var(--color-border)]/10">
          <p className="text-white font-bold text-lg drop-shadow">Dr. Adriano Hermida Maia</p>
          <p className="text-white/80 font-medium text-xs drop-shadow">OAB/SP 476.963 | Especialista em Dívidas</p>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-brand)]">Trajetória e Expertise</h2>
        <div className="space-y-4 text-[var(--color-text)]/80 text-sm leading-relaxed">
          <p>Advogado com sólida formação acadêmica e experiência em Direito Bancário e do Consumidor. Defesa do "mínimo existencial" e aplicação da Lei 14.181/2021.</p>
          <p>Atuação nacional, referência em renegociação de dívidas e combate a práticas abusivas de bancos.</p>
          <p>Restauramos a dignidade de quem foi sufocado por juros abusivos. Ninguém deve ser escravo de uma dívida impagável.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {["Especialista em Direito Bancário","Referência em Lei 14.181/2021","Atuação nacional","Foco em resultados humanizados"].map((item,i)=>(
            <div key={i} className="flex items-center gap-2 text-[var(--color-text-secondary)] text-xs font-medium">
              <CheckCircle2 className="text-[var(--color-brand-primary)]" size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProfileSection;
