import React from 'react';
import { AlertCircle, CheckCircle2, MessageCircle, Zap } from 'lucide-react';
import { useTheme } from '../../../styles/ThemeProvider';

const Calculator: React.FC = () => {
  useTheme();
  const [formData, setFormData] = React.useState({
    totalDebt: '',
    monthlyInstallment: '',
    monthlyIncome: ''
  });
  const [result, setResult] = React.useState<{
    percentage: number;
    isSuperendividado: boolean;
  } | null>(null);

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    if (!numericValue) return '';
    const amount = (parseInt(numericValue) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    return amount;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const formatted = formatCurrency(e.target.value);
    setFormData(prev => ({ ...prev, [field]: formatted }));
  };

  const parseCurrency = (value: string) => {
    return parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  };

  const [isSaving, setIsSaving] = React.useState(false);

  const calculate = async () => {
    const installment = parseCurrency(formData.monthlyInstallment);
    const income = parseCurrency(formData.monthlyIncome);
    if (income > 0) {
      const percentage = (installment / income) * 100;
      const calculationResult = {
        percentage,
        isSuperendividado: percentage > 30
      };
      setResult(calculationResult);
      setIsSaving(true);
      try {
        const res = await fetch('/api/simulations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            ...calculationResult,
            timestamp: new Date().toISOString(),
          }),
        });
        if (res.status === 405) {
          // Mostra mensagem amigável ao usuário, não loga erro no console
          alert('A simulação não pôde ser salva. Este recurso está temporariamente indisponível.');
        }
      } catch (error) {
        // erro ao salvar simulação
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <section id="calculadora" className="py-24 bg-[var(--color-bg-alt)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-brand-primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="rounded-[2.5rem] p-8 sm:p-12 shadow-2xl bg-[var(--color-cardElevated)] border border-[var(--color-border)]/10">
            <div className="space-y-10 animate-fade-in">
              {/* Card de resultado */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-3xl shadow-2xl border border-[var(--color-border)]/10">
                {result && (
                  <>
                    <div className={`flex items-center justify-center rounded-full shadow-lg ${result.isSuperendividado ? 'bg-[var(--color-error)]' : 'bg-[var(--color-success)]'} w-20 h-20`}>
                      {result.isSuperendividado ? <AlertCircle size={44} className="text-white" /> : <CheckCircle2 size={44} className="text-white" />}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-extrabold mb-2 text-[#394a66]">Situação Financeira</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                        <span className={`inline-block px-3 py-1 rounded-full text-base font-bold ${result.isSuperendividado ? 'bg-[var(--color-error)]/10 text-[var(--color-error)]' : 'bg-[var(--color-success)]/10 text-[var(--color-success)]'}`}>
                          {result.isSuperendividado ? 'Superendividamento Detectado' : 'Saudável'}
                        </span>
                        <span className="inline-block px-2 py-1 rounded bg-gray-100 text-[var(--color-brand)] font-bold text-base ml-1">
                          {result.percentage.toFixed(1)}%
                        </span>
                      </div>
                      <p className="mt-2 text-[var(--color-text-secondary)] text-base">
                        {result.isSuperendividado
                          ? <>Atenção! Suas dívidas comprometem <span className="font-bold text-[var(--color-error)]">{result.percentage.toFixed(1)}%</span> da sua renda (limite saudável: 30%).</>
                          : <>Parabéns! Suas dívidas estão dentro do limite saudável (30%).</>
                        }
                      </p>
                    </div>
                  </>
                )}
              </div>
              {/* Cards de valores */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[var(--color-cardElevated)] rounded-2xl p-6 border border-[var(--color-border)]/10 flex flex-col items-center">
                  <span className="text-xs text-[var(--color-text-secondary)] mb-1">Total de Dívidas</span>
                  <span className="text-lg font-bold text-[var(--color-text)]">{formData.totalDebt}</span>
                </div>
                <div className="bg-[var(--color-cardElevated)] rounded-2xl p-6 border border-[var(--color-border)]/10 flex flex-col items-center">
                  <span className="text-xs text-[var(--color-text-secondary)] mb-1">Parcelas Mensais</span>
                  <span className="text-lg font-bold text-[var(--color-text)]">{formData.monthlyInstallment}</span>
                </div>
                <div className="bg-[var(--color-cardElevated)] rounded-2xl p-6 border border-[var(--color-border)]/10 flex flex-col items-center">
                  <span className="text-xs text-[var(--color-text-secondary)] mb-1">Renda Líquida</span>
                  <span className="text-lg font-bold text-[var(--color-text)]">{formData.monthlyIncome}</span>
                </div>
              </div>
              {/* Mensagem de orientação */}
              <div className={`p-6 rounded-2xl border flex items-center gap-4 ${result.isSuperendividado ? 'bg-[var(--color-error)]/10 border-[var(--color-error)]/30' : 'bg-[var(--color-success)]/10 border-[var(--color-success)]/30'}`}>
                <div className={`${result.isSuperendividado ? 'bg-[var(--color-error)]' : 'bg-[var(--color-success)]'} text-white p-2 rounded-md`}>
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-base text-[var(--color-text)]">
                  {result.isSuperendividado
                    ? <>Você tem direito à Lei do Superendividamento! Podemos reduzir até 70% das suas dívidas e restaurar sua paz financeira.</>
                    : <>Considere agendar uma consulta para avaliar possíveis melhorias em seus contratos.</>
                  }
                </p>
              </div>
              {/* Botões */}
              <div className="space-y-10 animate-fade-in">
                {result && <>
                  {/* Card de resultado */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-8 bg-white rounded-3xl shadow-2xl border border-[var(--color-border)]/10">
                    <div className={`flex items-center justify-center rounded-full shadow-lg ${result.isSuperendividado ? 'bg-[var(--color-error)]' : 'bg-[var(--color-success)]'} w-20 h-20`}>
                      {result.isSuperendividado ? <AlertCircle size={44} className="text-white" /> : <CheckCircle2 size={44} className="text-white" />}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-extrabold mb-2 text-[#394a66]">Situação Financeira</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                        <span className={`inline-block px-3 py-1 rounded-full text-base font-bold ${result.isSuperendividado ? 'bg-[var(--color-error)]/10 text-[var(--color-error)]' : 'bg-[var(--color-success)]/10 text-[var(--color-success)]'}`}>
                          {result.isSuperendividado ? 'Superendividamento Detectado' : 'Saudável'}
                        </span>
                        <span className="inline-block px-2 py-1 rounded bg-gray-100 text-[var(--color-brand)] font-bold text-base ml-1">
                          {result.percentage.toFixed(1)}%
                        </span>
                      </div>
                      <p className="mt-2 text-[var(--color-text-secondary)] text-base">
                        {result.isSuperendividado
                          ? <>Atenção! Suas dívidas comprometem <span className="font-bold text-[var(--color-error)]">{result.percentage.toFixed(1)}%</span> da sua renda (limite saudável: 30%).</>
                          : <>Parabéns! Suas dívidas estão dentro do limite saudável (30%).</>
                        }
                      </p>
                    </div>
                  </div>
                  {/* Cards de valores */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[var(--color-cardElevated)] rounded-2xl p-6 border border-[var(--color-border)]/10 flex flex-col items-center">
                      <span className="text-xs text-[var(--color-text-secondary)] mb-1">Total de Dívidas</span>
                      <span className="text-lg font-bold text-[var(--color-text)]">{formData.totalDebt}</span>
                    </div>
                    <div className="bg-[var(--color-cardElevated)] rounded-2xl p-6 border border-[var(--color-border)]/10 flex flex-col items-center">
                      <span className="text-xs text-[var(--color-text-secondary)] mb-1">Parcelas Mensais</span>
                      <span className="text-lg font-bold text-[var(--color-text)]">{formData.monthlyInstallment}</span>
                    </div>
                    <div className="bg-[var(--color-cardElevated)] rounded-2xl p-6 border border-[var(--color-border)]/10 flex flex-col items-center">
                      <span className="text-xs text-[var(--color-text-secondary)] mb-1">Renda Líquida</span>
                      <span className="text-lg font-bold text-[var(--color-text)]">{formData.monthlyIncome}</span>
                    </div>
                  </div>
                  {/* Mensagem de orientação */}
                  <div className={`p-6 rounded-2xl border flex items-center gap-4 ${result.isSuperendividado ? 'bg-[var(--color-error)]/10 border-[var(--color-error)]/30' : 'bg-[var(--color-success)]/10 border-[var(--color-success)]/30'}`}>
                    <div className={`${result.isSuperendividado ? 'bg-[var(--color-error)]' : 'bg-[var(--color-success)]'} text-white p-2 rounded-md`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-base text-[var(--color-text)]">
                      {result.isSuperendividado
                        ? <>Você tem direito à Lei do Superendividamento! Podemos reduzir até 70% das suas dívidas e restaurar sua paz financeira.</>
                        : <>Considere agendar uma consulta para avaliar possíveis melhorias em seus contratos.</>
                      }
                    </p>
                  </div>
                  {/* Botões */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a 
                      href="https://wa.me/5551996032004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 px-6 py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:scale-105 border border-[var(--color-accent)]"
                    >
                      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.96.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.61 0 5.07 1.02 6.93 2.88A9.77 9.77 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
                      Falar com Advogado
                    </a>
                    <button 
                      onClick={reset}
                      className="bg-white text-[var(--color-brand)] border border-[var(--color-border)] px-6 py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                    >
                      Nova Análise
                    </button>
                  </div>
                </>}
                <div>
                  <p className="text-center text-[10px] text-[var(--color-text)]/30 mt-8">
                    * Seus dados estão protegidos pela LGPD e serão usados apenas para esta análise.
                  </p>
                </div>
              {/* ...existing code... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
