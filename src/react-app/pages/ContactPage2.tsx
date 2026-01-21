

// Manifesto: ContactPage2
// - Modular: ContactHero, ContactCards, ContactFormSection
// - Skeleton: loading states em cada módulo
// - Hooks: useState, handleSubmit
// - Router: react-router-dom
// - Mobile-first, acessível, tokenização CSS
import React, { useState } from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactHero from '../components/Contact/ContactHero';
import ContactCards from '../components/Contact/ContactCards';
import ContactFormSection from '../components/Contact/ContactFormSection';
import { CustomForm } from '../components/CustomForm';
import { contactFormTheme } from '../components/CustomForm/themes';
import { apiBase } from '../utils/apiBase';


const ContactPage2: React.FC = () => {
  const [formConfigs, setFormConfigs] = useState<any>(null);
  React.useEffect(() => {
    import('../../shared/form-configs.json').then(mod => setFormConfigs(mod.default || mod));
  }, []);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const handleSubmit = async (formData: any) => {
    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: 'contact_form', ...formData }),
      });
      if (!response.ok) {
        setStatus({
          type: 'error',
          message: 'Erro ao enviar mensagem. Tente novamente.'
        });
        return;
      }
      const result = await response.json();
      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.'
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.'
        });
      }
    } catch {
      setStatus({ type: 'error', message: 'Erro de conexão. Verifique sua internet e tente novamente.' });
    }
  };
  if (!formConfigs) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white">
        <div className="text-center space-y-4">
          <div className="animate-spin mx-auto w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full" />
          <p className="text-lg font-bold">Carregando formulário de contato...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactHero />
          <ContactCards />
          <ContactFormSection
            status={status}
            setStatus={setStatus}
            onSubmit={handleSubmit}
            CustomForm={CustomForm}
            schema={formConfigs.contact_form.jsonSchema}
            theme={contactFormTheme}
          />
        </div>
      </main>
      {/* Footer removido: agora é global via App.tsx */}
      <ScrollToTopButton />
    </>

  );
}

export default ContactPage2;
