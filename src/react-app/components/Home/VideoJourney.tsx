
import React, { useState } from 'react';
import { Play, CheckCircle2, Calendar, TrendingDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../styles/ThemeProvider';

const videos = [
  { id: "Q0PSv2Lc8Qk", title: "Como Funciona a Lei do Superendividamento" },
  { id: "d7dW08nWAcY", title: "Quem Tem Direito a Utilizar a Lei do Superendividamento" },
  { id: "xUbtNefpFs8", title: "Como Renegociar Dívidas pela Lei do Supernedividamento" },
  { id: "GEtGj05jxTw", title: "Como Funciona o Plano de Pagamento na Lei do Superendividamento?" }
];

const VideoJourney: React.FC = () => {
  useTheme();

  // State for current video step and completion
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Handler for advancing to next video or completing journey
  const handleNext = () => {
    if (currentStep < videos.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <section id="video-section" className="py-24 bg-[var(--color-bg-alt)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 px-4 py-2 rounded-full mb-4">
            <Play size={16} className="text-[var(--color-brand-primary)]" />
            <span className="text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest">Passo a Passo Jurídico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-brand)] mb-4">Saiba Como Eliminar Dívidas e Cobranças Abusivas com a Lei 14.181/2021</h2>
          <p className="text-[var(--color-text-secondary)]/90 max-w-2xl mx-auto">Assista aos vídeos abaixo para entender como funciona o acordo judicial e a renegociação de dívidas até 70% com um especialista certificado.</p>
        </div>
        {!completed ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
              <div className="flex gap-2">
                {videos.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 w-12 sm:w-20 rounded-full transition-all duration-500 ${idx <= currentStep ? 'bg-brand-primary' : 'bg-white/10'}`}
                  />
                ))}
              </div>
              <span className="text-white/40 text-sm font-bold">Vídeo {currentStep + 1} de 4</span>
            </div>
            <div className="bg-[var(--color-cardElevated)] border border-[var(--color-border)]/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[currentStep].id}?autoplay=0&rel=0`}
                  title={videos[currentStep].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-xl mb-1 text-[var(--color-brand)]">{videos[currentStep].title}</h3>
                  <p className="text-[var(--color-text-secondary)]/80 text-sm">Assista para liberar o próximo passo</p>
                </div>
                <button 
                  onClick={handleNext}
                  className="w-full sm:w-auto bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[var(--color-brand-primary)]/20"
                >
                  {currentStep === 3 ? 'Concluir e Ver Opções' : 'Próximo Vídeo'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="bg-[var(--color-cardElevated)] p-8 sm:p-16 rounded-[2.5rem] border border-[var(--color-brand-primary)]/30 shadow-2xl shadow-[var(--color-brand-primary)]/10">
              <div className="w-20 h-20 bg-[var(--color-brand-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="text-[var(--color-brand-primary)]" size={40} />
              </div>
              <h3 className="text-3xl font-extrabold mb-6 text-[var(--color-brand)]">Jornada Concluída!</h3>
              <p className="text-[var(--color-text-secondary)] text-lg mb-10">Agora que você conhece seus direitos, escolha como deseja recuperar sua paz financeira:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/appointments"
                  className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/90 text-white px-8 py-5 rounded-2xl font-extrabold text-lg transition-all hover:scale-105 shadow-xl shadow-[var(--color-brand-primary)]/20 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Agendar uma avaliação online
                </Link>
                <button 
                  onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--color-card)] hover:bg-[var(--color-cardElevated)] text-[var(--color-brand-primary)] border border-[var(--color-border)]/10 px-8 py-5 rounded-2xl font-extrabold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <TrendingDown size={20} />
                  Monte seu plano de pagamento
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoJourney;
