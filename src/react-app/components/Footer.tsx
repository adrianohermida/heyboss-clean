
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 transition-all duration-300" style={{ background: 'linear-gradient(90deg, #173D34 0%, #00d969 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Branding e institucional */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-2xl shadow-lg border-2 border-[var(--color-success)] bg-white dark:bg-[var(--color-brand)] transition-all" style={{ width: 44, height: 44 }}>
                <img src="/assets/img/logo_lzI6JHzO.webp" alt="Logo Dr. Adriano Hermida Maia" className="w-8 h-8 object-contain" onError={(e) => { e.currentTarget.src = '/assets/img/473411138_1420160585659716_5467583944226702322_n.png'; }} />
              </span>
              <span className="text-white font-extrabold text-lg tracking-tight" style={{ textShadow: '0 2px 8px #00d96940' }}>Dr. Adriano Hermida Maia</span>
            </div>
            <p className="text-[var(--color-text)] text-sm leading-relaxed">
              Advocacia especializada em defesa do consumidor e superendividamento. Atuação nacional com foco em resultados e dignidade humana.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/hermidamaia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:text-[var(--color-success)] hover:bg-white/20 transition-all" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
              </a>
              <a href="https://facebook.com/hermidamaia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:text-[var(--color-success)] hover:bg-white/20 transition-all" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.1c-3.9 0-7 3.1-7 7v2H7v4h3v8h4v-8h3l1-4h-4V9c0-1.1.9-2 2-2h2V3.1c-.7-.1-1.4-.1-2-.1z"/></svg>
              </a>
              <a href="https://linkedin.com/in/hermidamaia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:text-[var(--color-success)] hover:bg-white/20 transition-all" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.7-1.7-1.6c0-.9.7-1.6 1.7-1.6c1 0 1.7.7 1.7 1.6c0 .9-.7 1.6-1.7 1.6zm13.5 10.3h-3v-4.5c0-1.1-.4-1.8-1.3-1.8c-.7 0-1.1.5-1.3 1c-.1.2-.1.5-.1.8v4.5h-3v-9h3v1.2c.4-.6 1.1-1.5 2.7-1.5c2 0 3.5 1.3 3.5 4.1v5.2z"/></svg>
              </a>
              <a href="https://youtube.com/@hermidamaia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:text-[var(--color-success)] hover:bg-white/20 transition-all" aria-label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19.1 3.3 12 3.3 12 3.3s-7.1 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1.2 1.2 2.1 2.4 2.4c2 0 9.1 0 9.1 0s7.1 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6.5 3.5l-6.5 3.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-white">
              <li><a href="#" className="hover:text-[var(--color-success)] transition-colors">Defesa do Superendividado</a></li>
              <li><a href="#" className="hover:text-[var(--color-success)] transition-colors">Revisão de Contratos Bancários</a></li>
              <li><a href="#" className="hover:text-[var(--color-success)] transition-colors">Renegociação de Dívidas</a></li>
              <li><a href="#" className="hover:text-[var(--color-success)] transition-colors">Fraudes e Golpes Bancários</a></li>
            </ul>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-white font-bold mb-6">Links úteis</h4>
            <ul className="space-y-4 text-sm text-white">
              <li><a href="https://hmdesk.freshdesk.com/support/home" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-success)] transition-colors">Central de Ajuda</a></li>
              <li><a href="https://hmdesk.freshdesk.com/support/tickets/new" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-success)] transition-colors">Enviar ticket</a></li>
              <li><a href="https://comunica.pje.jus.br/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-success)] transition-colors">Consulta CNJ</a></li>
              <li><a href="https://www.cnj.jus.br/poder-judiciario/tribunais/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-success)] transition-colors">Página dos Tribunais</a></li>
              <li><a href="https://adrianohermida.jusbrasil.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-success)] transition-colors">Meu Jusbrasil</a></li>
            </ul>
          </div>

          {/* Contato e newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white">
                <span className="inline-block w-5 h-5 text-[var(--color-success)]">📞</span>
                <span>(51) 99603-2004</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white">
                <span className="inline-block w-5 h-5 text-[var(--color-success)]">✉️</span>
                <span>contato@hermidamaia.adv.br</span>
              </div>
            </div>
            <div className="pt-2">
              <form className="space-y-3">
                <p className="text-white text-xs font-medium ml-1">Assine nossa newsletter jurídica:</p>
                <div className="flex gap-2">
                  <input type="email" required placeholder="Seu e-mail" className="flex-1 rounded-lg px-4 py-2 bg-white/10 text-white border border-white/20 focus:border-[var(--color-success)] outline-none text-sm" />
                  <button type="submit" className="bg-brand-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[var(--color-success)] transition-all">Assinar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white font-medium">
            <a href="#" className="hover:text-[var(--color-success)] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[var(--color-success)] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[var(--color-success)] transition-colors">LGPD</a>
          </div>
          <p className="text-xs text-white">
            © 2024 Hermida Maia Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
