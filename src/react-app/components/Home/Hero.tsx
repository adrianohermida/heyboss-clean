import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingDown, Star } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const Hero: React.FC = () => {
  const { mode } = useTheme();
  // Alternância institucional premium de fundo
  const bg = mode === 'clear' ? 'bg-white' : 'bg-[var(--color-bg)]';
  return (
    <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden ${bg}`}
      style={{ background: mode === 'clear' ? '#fff' : 'var(--color-bg)' }}>
      {/* Removido overlay degradê */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left space-y-8`}>
            {/* Badge com contraste máximo */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 shadow-sm" style={{ background: '#00d969', borderColor: '#00b85b', boxShadow: '0 2px 8px 0 rgba(0,217,105,0.18)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#fff' }} />
              <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: '#fff', letterSpacing: 1.5, textShadow: '0 1px 0 #00b85b' }}>LEI 14.181/2021 • SUPERENDIVIDAMENTO</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold ${text} leading-[1.1] sm:!text-[53px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]`} style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>
              Advogado Especialista em Superendividamento: Parcele suas <span className="text-[var(--color-success)]">dívidas</span> em até 5 anos
            </h1>
            <p className={`text-lg text-[var(--color-text)]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed`} style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-white)' }}>
              Advocacia especializada em superendividamento e defesa do consumidor. Mais de R$ 35 milhões em redução de dívidas renegociados em todo o Brasil. Recupere sua paz financeira hoje.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto font-bold text-lg flex items-center justify-center gap-3 transition-all rounded-xl px-8 py-4 group"
                style={{ background: 'var(--color-success)', color: '#fff', border: '1px solid var(--color-success)', boxShadow: '0 2px 12px 0 #00d96930' }}
              >
                Calcular Gratuitamente
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/appointments" className="w-full sm:w-auto font-bold text-lg transition-all items-center justify-center rounded-xl px-8 py-4" style={{ background: 'var(--color-cardElevated)', color: 'var(--color-brand)', border: '1px solid var(--color-brand)', boxShadow: '0 2px 12px 0 #173D3430' }}>
                Agendar Consulta
              </Link>
            </div>
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
                <div className="flex -space-x-3">
                  <img src="/assets/avatars/avatar1.png" className="w-10 h-10 rounded-full border-2 border-[#00d969] object-cover bg-white shadow" alt="Avatar 1" />
                  <img src="/assets/avatars/avatar2.png" className="w-10 h-10 rounded-full border-2 border-[#00d969] object-cover bg-white shadow" alt="Avatar 2" />
                  <img src="/assets/avatars/avatar3.png" className="w-10 h-10 rounded-full border-2 border-[#00d969] object-cover bg-white shadow" alt="Avatar 3" />
                  <img src="/assets/avatars/avatar4.png" className="w-10 h-10 rounded-full border-2 border-[#00d969] object-cover bg-white shadow" alt="Avatar 4" />
                </div>
              <div className="text-sm">
                <div className="flex gap-0.5 text-[var(--color-success)]">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" stroke="currentColor" />)}
                </div>
                <p className="text-[var(--color-text-secondary)] font-medium">+2.500 famílias satisfeitas</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-white p-4 rounded-2xl border border-[var(--color-success)]/40 shadow z-30 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="bg-white border border-[var(--color-success)]/40 p-2 rounded-lg shadow">
                  <ShieldCheck className="text-[var(--color-success)]" size={24} />
                </div>
                <div>
                  <p className="text-[var(--color-brand)] font-bold text-sm">OAB/RS 107048</p>
                  <p className="text-[var(--color-text-secondary)] text-xs">Pós-graduado</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white p-4 rounded-2xl border border-[var(--color-success)]/40 shadow z-30 pointer-events-none">
              <div className="flex items-center gap-3">
                <div className="bg-white border border-[var(--color-success)]/40 p-2 rounded-lg shadow">
                  <TrendingDown className="text-[var(--color-success)]" size={24} />
                </div>
                <div>
                  <p className="text-[var(--color-brand)] font-bold text-sm">12 anos</p>
                  <p className="text-[var(--color-text-secondary)] text-xs">de Atuação</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-[var(--color-border)]/10 shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69457177ae7e61f63fb38329/3b78c0579__TLM961311.jpg"
                alt="Dr. Adriano Hermida Maia, advogado especialista em superendividamento e Lei 14.181/2021."
                className="w-full h-auto object-cover relative z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
