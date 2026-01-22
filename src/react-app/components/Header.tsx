//
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Briefcase, ChevronDown, LayoutDashboard, Menu, X, Shield, Settings } from 'lucide-react';
import { useAuth } from '@hey-boss/users-service/react';
/**
 * @description Componente de cabeçalho global para o site Hermida Maia Advocacia.
 *             Gerencia a navegação principal e o estado de autenticação do usuário.
 */



const Header = () => {
  const { mode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
            <a href="https://hmdesk.freshdesk.com/support/tickets/new" target="_blank" rel="noopener noreferrer" className="transition-colors text-sm font-semibold hover:text-[var(--color-accent)]" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Contato</a>
  const adminEmails = [
    'contato@hermidamaia.adv.br',
    'adrianohermida@gmail.com',
    'admin@example.com',
  ];
  const userEmail = (user?.email || "").toLowerCase();
  const isAdmin = user && (
    (user as any).isAdmin === true || 
    adminEmails.some(email => email.toLowerCase() === userEmail)
  );

  function handleLogout() {
    logout();
  }

  return (
    <header
      className="fixed top-0 w-full z-50 border-b shadow-lg transition-all duration-300"
      style={mode === 'clear'
        ? {
            background: 'linear-gradient(90deg, #F1F5ED 0%, #fff 100%)',
            color: '#173D34',
            boxShadow: '0 4px 24px 0 #173D3420',
            borderBottom: '2px solid #e5eaf2'
          }
        : {
            background: 'linear-gradient(90deg, #173D34 0%, #00d969 100%)',
            color: '#F1F5ED',
            boxShadow: '0 4px 24px 0 #00d96930',
            borderBottom: '2px solid #00d969'
          }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop theme switcher (direita do header) - removed */}
          <Link to="/" className="flex items-center gap-4 group">
            <span
              className={`inline-flex items-center justify-center rounded-2xl shadow-lg border-2 transition-all ${mode === 'clear' ? 'border-[var(--color-success)] bg-white' : 'border-[var(--color-success)] bg-[var(--color-brand)]'}`}
              style={{ width: 52, height: 52 }}
            >
              <img
                src="/assets/img/logo_lzI6JHzO.webp"
                alt="Logo Dr. Adriano Hermida Maia"
                style={{ width: 40, height: 40, objectFit: 'contain', filter: mode === 'clear' ? 'none' : 'brightness(1.2) contrast(1.1)' }}
                onError={(e) => {
                  const fallback = '/assets/img/473411138_1420160585659716_5467583944226702322_n.png';
                  if (e.currentTarget.src !== window.location.origin + fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
              />
            </span>
            <div className="flex flex-col ml-2">
              <span
                className="font-extrabold text-xl leading-tight tracking-tight"
                style={{
                  color: mode === 'clear' ? 'var(--color-brand)' : '#fff',
                  fontFamily: 'inherit',
                  textShadow: mode === 'clear' ? 'none' : '0 2px 8px #00d96940',
                }}
              >
                Dr. Adriano Hermida Maia
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: mode === 'clear' ? 'var(--color-success)' : '#fff',
                  opacity: 1,
                  fontFamily: 'inherit',
                  letterSpacing: 2,
                }}
              >
                Defesa do Superendividado
              </span>
            <Link to="/about2" className="transition-colors text-sm font-semibold hover:text-[var(--color-accent)]" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Sobre</Link>
            <a href="/#serviços" className="transition-colors text-sm font-semibold hover:text-[var(--color-accent)]" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Serviços</a>
            <Link to="/blog" className="transition-colors text-sm font-semibold hover:text-[var(--color-accent)]" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Blog</Link>
            <Link to="/contact2" className="transition-colors text-sm font-semibold hover:text-[var(--color-accent)]" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>Contato</Link>
            
            {user ? (
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Abrir menu do usuário"
                  className="flex items-center gap-3 bg-white/10 hover:bg-[var(--color-accent)] border border-white/10 rounded-full pl-2 pr-4 py-1.5 transition-all focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  style={{ color: 'var(--color-brand)' }}
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xs">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      user.name?.[0] || user.email?.[0].toUpperCase()
                    )}
                  </div>
                  <span className="text-sm font-medium hidden xl:inline" style={{ color: 'var(--color-brand)' }}>{user.name || user.email.split('@')[0]}</span>
                  <ChevronDown size={16} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--color-brand)', opacity: 0.5 }} />
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-brand-elevated border border-white/10 rounded-2xl shadow-2xl py-2 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 border-b border-white/5 mb-2">
                      <p className="font-bold text-sm truncate" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>{user.name || 'Usuário'}</p>
                      <p className="text-xs truncate" style={mode === 'clear' ? { color: '#394a66', opacity: 0.5 } : { color: '#fff', opacity: 0.4 }}>{user.email}</p>
                    </div>
                    
                    {isAdmin && (
                      <Link 
                        to="/dashboard" 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-bold hover:bg-brand-primary/10 transition-all border-b border-white/5"
                        style={mode === 'clear' ? { color: '#394a66' } : { color: '#0d9c6e' }}
                      >
                        <Shield size={18} />
                        Painel Administrativo
                      </Link>
                    )}
                    
                    <Link 
                      to="/perfil" 
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-white/5 transition-all"
                      style={mode === 'clear' ? { color: '#394a66', opacity: 0.8 } : { color: '#fff', opacity: 0.7 }}
                    >
                      <User size={16} />
                      Meu Perfil
                    </Link>

                    <Link 
                      to="/account" 
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition-all"
                      style={mode === 'clear' ? { color: '#394a66', opacity: 0.8 } : { color: '#fff', opacity: 0.7 }}
                    >
                      <LayoutDashboard size={18} />
                      Meu Painel (Cliente)
                    </Link>

                    <div className="h-px bg-white/5 my-2" />
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all"
                    >
                      <LogOut size={18} />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] border border-white/20 bg-white hover:bg-[var(--color-accent)] hover:text-white shadow-md"
                style={{ color: 'var(--color-brand)' }}
                aria-label="Ir para login"
              >
                <User size={16} />
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {user && (
              <Link to={isAdmin ? "/dashboard" : "/portal"} className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xs">
                {user.name?.[0] || user.email?.[0].toUpperCase()}
              </Link>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 focus-visible:ring-2 focus-visible:ring-brand-primary"
              style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff', opacity: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={2.2} /> : <Menu size={28} strokeWidth={2.2} />}
            </button>
            {/* Modern theme toggle button (mobile) - removed */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-20 z-40 animate-in slide-in-from-top duration-300 border-t border-white/5`} style={mode === 'clear' ? { background: '#fff' } : { background: '#181c2a', backdropFilter: 'blur(8px)' }}>
          <nav className="flex flex-col p-6 gap-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg md:text-xl font-bold border-b border-white/5 pb-4 focus-visible:ring-2 focus-visible:ring-brand-primary" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>Início</Link>
            <Link to="/about2" onClick={() => setIsMobileMenuOpen(false)} className="text-lg md:text-xl font-bold border-b border-white/5 pb-4 focus-visible:ring-2 focus-visible:ring-brand-primary" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>Sobre</Link>
            <a href="/#serviços" onClick={() => setIsMobileMenuOpen(false)} className="text-lg md:text-xl font-bold border-b border-white/5 pb-4 focus-visible:ring-2 focus-visible:ring-brand-primary" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>Serviços</a>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg md:text-xl font-bold border-b border-white/5 pb-4 focus-visible:ring-2 focus-visible:ring-brand-primary" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>Blog</Link>
            <Link to="/contact2" onClick={() => setIsMobileMenuOpen(false)} className="text-lg md:text-xl font-bold border-b border-white/5 pb-4 focus-visible:ring-2 focus-visible:ring-brand-primary" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>Contato</Link>
            {!user && (
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-primary text-white text-center py-4 rounded-xl font-bold text-lg mt-4">
                Fazer Login
              </Link>
            )}
            {user && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                    {user.name?.[0] || user.email?.[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff' }}>{user.name || user.email.split('@')[0]}</p>
                    <p className="text-xs" style={mode === 'clear' ? { color: '#394a66', opacity: 0.4 } : { color: '#fff', opacity: 0.4 }}>{user.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {isAdmin && (
                    <Link 
                      to="/dashboard" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl bg-brand-primary/20 text-brand-primary font-bold"
                    >
                      <LayoutDashboard size={20} />
                      Meu Escritório (Admin)
                    </Link>
                  )}
                  <Link 
                    to="/account" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                    style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff', opacity: 0.7 }}
                  >
                    <LayoutDashboard size={20} />
                    Meu Painel (Cliente)
                  </Link>
                  <Link 
                    to="/perfil" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                    style={mode === 'clear' ? { color: '#394a66' } : { color: '#fff', opacity: 0.7 }}
                  >
                    <User size={20} />
                    Meu Perfil
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );

};

export default Header;


