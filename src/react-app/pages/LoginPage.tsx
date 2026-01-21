

/**
 * @description Página de Login para Hermida Maia Advocacia.
 *             Oferece opções de login via Google e E-mail (OTP).
 *             Integrada ao @hey-boss/users-service para gestão de identidade.
 *             Redireciona para o painel administrativo ou portal após o login.
 */



import React, { useEffect } from 'react';
// import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useNavigate, Link } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import GoogleLoginButton from '../components/Login/GoogleLoginButton';
import MagicLinkForm from '../components/Login/MagicLinkForm';
import { loginPageManifest } from '../components/Login/LoginPage.manifest';
import { useTheme } from '../../styles/ThemeProvider';
import { apiBase } from '../utils/apiBase';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mode } = useTheme();

  useEffect(() => {
    const sessionCheck = async () => {
      const { supabase } = await import('../../supabaseClient');
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/dashboard', { replace: true });
      }
    };
    sessionCheck();
  }, [navigate]);

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center px-4 py-12"
        style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}
      >
        <div
          className="max-w-md w-full space-y-8 p-8 sm:p-12 rounded-[2.5rem] border relative overflow-hidden shadow-2xl"
          style={{
            background: 'var(--color-card)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
            boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
          <div className="text-center">
            <div className="bg-brand-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20">
              <img src="https://heyboss.heeyo.ai/user-assets/logo_lzI6JHzO.png" alt="Logo" className="w-10 h-10 object-cover" />
            </div>
            <h2 className="text-3xl font-extrabold" style={{ color: 'var(--color-text)' }}>Acesse sua Área</h2>
            <p style={{ marginTop: 8, color: 'var(--color-text)' }}>
              <span className="block">Acesso restrito a clientes e colaboradores cadastrados.</span>
              <span className="block text-xs mt-1 text-brand-primary">Somente usuários previamente cadastrados podem acessar.</span>
              <span className="block text-xs mt-1" style={{ color: 'var(--color-border)' }}>Não é possível criar conta por este formulário.</span>
            </p>
          </div>
          <div className="space-y-2">
            <LoginForm />
            <div className="flex justify-between items-center mt-2">
              <Link to="/forgot-password" className="text-xs text-brand-primary font-bold hover:underline">Esqueci minha senha</Link>
              <Link to="/register" className="text-xs text-brand-primary font-bold hover:underline">Criar Conta</Link>
            </div>
          </div>
          <div className="mt-8">
            <GoogleLoginButton />
          </div>
          <div className="mt-8">
            <MagicLinkForm />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default LoginPage;
