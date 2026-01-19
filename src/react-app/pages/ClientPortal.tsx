// Manifesto: ClientPortal
// - Modular: ClientPortalSidebar, ClientPortalOverview
// - Skeleton: loading states (em cada módulo)
// - Hooks: useState, useEffect
// - Router: react-router-dom para navegação
// - Responsivo, acessível, mobile-first, tokenização CSS
import React, { useState, useEffect } from 'react';
// Toast/banner para feedback visual
const Toast: React.FC<{ type: 'success' | 'error'; message: string; onClose?: () => void }> = ({ type, message, onClose }) => (
  <div className={clsx(
    'fixed top-6 left-1/2 z-[200] -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg font-bold text-sm flex items-center gap-2',
    type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
  )}>
    {type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
    <span>{message}</span>
    {onClose && <button onClick={onClose} className="ml-4 text-white/70 hover:text-white focus:outline-none">✕</button>}
  </div>
);
import Header from '../components/Header';
import { useAuth } from '@hey-boss/users-service/react';
import ClientPortalSidebar from '../components/ClientPortal/ClientPortalSidebar';
import ClientPortalOverview from '../components/ClientPortal/ClientPortalOverview';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  Loader2, Scale, CheckCircle2, Clock, CreditCard, Download, FileText, ExternalLink, AlertCircle, Wallet, CalendarIcon, MessageSquare, ShieldCheck, Plus, Send, X, ChevronRight
} from 'lucide-react';
import { CustomForm } from '../components/CustomForm/CustomForm';
import { contactFormTheme } from '../components/CustomForm/themes';

import { cn } from '../utils';


const ClientPortal: React.FC = () => {
  const { user: authUser, access_token } = useAuth();
  const [user, setUser] = useState<any>(authUser);
  const [activeTab, setActiveTab] = useState('overview');
  const [summary, setSummary] = useState({ processos: 0, faturas: 0, tickets: 0, appointments: 0 });
  const [exporting, setExporting] = useState(false);
  // Estados para cada módulo
  const [processos, setProcessos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [faturas, setFaturas] = useState<any[]>([]);
  const [planos, setPlanos] = useState<any[]>([]);
  const [documentos, setDocumentos] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loadingAppointments, setLoadingAppointments] = useState(false);
  const [formConfigs, setFormConfigs] = useState<any>(null);
  const [allConfigs, setAllConfigs] = useState<any>(null);

  useEffect(() => {
    import('../../shared/form-configs.json').then(mod => {
      setFormConfigs(mod.default?.contact_form || mod.contact_form || null);
      setAllConfigs(mod.default || mod);
    });
  }, []);

  // Função genérica para buscar dados de cada módulo
  const fetchData = async (modulo: string) => {
    setLoading(true);
    let token = access_token || localStorage.getItem('access_token');
    const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
      if (modulo === 'processos') {
        const res = await fetch('/api/processos/me', { headers: { 'Content-Type': 'application/json', ...authHeaders } });
        setProcessos(res.ok ? await res.json() : []);
      } else if (modulo === 'financeiro') {
        const res = await fetch('/api/faturas/me', { headers: { 'Content-Type': 'application/json', ...authHeaders } });
        setFaturas(res.ok ? await res.json() : []);
      } else if (modulo === 'plano') {
        const res = await fetch('/api/planos/me', { headers: { 'Content-Type': 'application/json', ...authHeaders } });
        setPlanos(res.ok ? await res.json() : []);
      } else if (modulo === 'documentos') {
        const res = await fetch('/api/documentos/me', { headers: { 'Content-Type': 'application/json', ...authHeaders } });
        setDocumentos(res.ok ? await res.json() : []);
      }
    } catch {
      if (modulo === 'processos') setProcessos([]);
      if (modulo === 'financeiro') setFaturas([]);
      if (modulo === 'plano') setPlanos([]);
      if (modulo === 'documentos') setDocumentos([]);
    } finally {
      setLoading(false);
    }
  };

  // Exemplo: buscar agendamentos
  useEffect(() => {
    if (activeTab === 'agenda') {
      setLoadingAppointments(true);
      let token = access_token || localStorage.getItem('access_token');
      const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};
      fetch('/api/my-appointments', { headers: { 'Content-Type': 'application/json', ...authHeaders } })
        .then(res => res.ok ? res.json() : [])
        .then(setAppointments)
        .finally(() => setLoadingAppointments(false));
    }
  }, [activeTab, access_token]);

  const handleExportData = async () => {
    setExporting(true);
    try {
      let token = access_token || localStorage.getItem('access_token');
      const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
      const res = await fetch('/api/users/personal-data', { headers });
      if (res.ok) {
        const data = await res.json();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `meus_dados_hermida_maia.json`;
        a.click();
      }
    } finally {
      setExporting(false);
    }
  };

  useEffect(() => {
    // Busca dados do usuário autenticado, só se houver token
    let token = access_token || localStorage.getItem('access_token');
    if (!token) return;
    const authHeaders = token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
    fetch('/api/users/me', { headers: authHeaders })
      .then(async res => {
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
          // Opcional: logar erro para debug
          // console.error('Erro ao buscar usuário:', res.status);
        }
      })
      .catch(() => {
        setUser(null);
      });
    fetch('/api/users/summary', { headers: authHeaders })
      .then(async res => {
        if (res.ok) {
          const data = await res.json();
          setSummary(data);
        } else {
          setSummary({ processos: 0, faturas: 0, tickets: 0, appointments: 0 });
        }
      })
      .catch(() => {
        setSummary({ processos: 0, faturas: 0, tickets: 0, appointments: 0 });
      });
  }, [access_token]);

  const { mode } = useTheme ? useTheme() : { mode: 'dark' };
  return (
    <div
      className={clsx(
        "min-h-screen selection:bg-brand-primary selection:text-white",
        mode === 'clear' ? 'bg-white text-[var(--color-brand-dark)]' : 'bg-brand-dark text-white'
      )}
    >
      <Header />
      <main className="pt-28 pb-16 px-2 sm:px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <ClientPortalSidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} exporting={exporting} onExport={handleExportData} />
          <div className="flex-1 min-w-0 space-y-8">
            {activeTab === 'overview' && <ClientPortalOverview user={user} summary={summary} setActiveTab={setActiveTab} />}
            {activeTab === 'processos' && <ClientPortalProcessos processos={processos} loading={loading} mode={mode} />}
            {activeTab === 'tickets' && <ClientPortalTickets user={user} access_token={access_token} mode={mode} />}
            {activeTab === 'financeiro' && <ClientPortalFinanceiro faturas={faturas} loading={loading} mode={mode} />}
            {activeTab === 'documentos' && <ClientPortalDocumentos documentos={documentos} loading={loading} user={user} allConfigs={allConfigs} mode={mode} />}
            {activeTab === 'plano' && <ClientPortalPlano planos={planos} loading={loading} mode={mode} />}
            {activeTab === 'agenda' && <ClientPortalAgenda appointments={appointments} loadingAppointments={loadingAppointments} mode={mode} />}
          </div>
        </div>
      </main>
    </div>
  );
};

const TicketsModule = () => {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [reply, setReply] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const { access_token } = useAuth();
  const [formConfigs, setFormConfigs] = useState<any>(null);
  const [allConfigs, setAllConfigs] = useState<any>(null);

  useEffect(() => {
    import('../../shared/form-configs.json').then(mod => {
      setFormConfigs(mod.default?.contact_form || mod.contact_form || null);
      setAllConfigs(mod.default || mod);
    });
  }, []);

  const fetchTickets = async () => {
    setLoading(true);
    let token = access_token || localStorage.getItem('access_token');
    const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
      const res = await fetch('/api/tickets', { headers: { 'Content-Type': 'application/json', ...authHeaders } });
      if (res.ok) setTickets(await res.json());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (id: number) => {
    let token = access_token || localStorage.getItem('access_token');
    const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
      const res = await fetch(`/api/tickets/${id}/messages`, { headers: { 'Content-Type': 'application/json', ...authHeaders } });
      if (res.ok) setMessages(await res.json());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    if (selectedTicket) {
      fetchMessages(selectedTicket.id);
      const interval = setInterval(() => fetchMessages(selectedTicket.id), 10000);
      return () => clearInterval(interval);
    }
  }, [selectedTicket]);

  const handleSendReply = async () => {
    if (!reply.trim() || sendingReply) return;
    setSendingReply(true);
    let token = access_token || localStorage.getItem('access_token');
    const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
      const res = await fetch(`/api/tickets/${selectedTicket.id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ message: reply })
      });
      if (res.ok) {
        setReply("");
        fetchMessages(selectedTicket.id);
        setFeedback({ type: 'success', message: 'Sua resposta foi enviada! Você será notificado quando nossa equipe responder.' });
      } else {
        setFeedback({ type: 'error', message: 'Não foi possível enviar sua resposta. Tente novamente.' });
      }
    } catch (e) {
      setFeedback({ type: 'error', message: 'Erro ao enviar resposta. Verifique sua conexão.' });
    } finally {
      setSendingReply(false);
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  if (selectedTicket) {
    return (
      <div className="space-y-6 animate-fade-in">
        {feedback && <Toast type={feedback.type} message={feedback.message} onClose={() => setFeedback(null)} />}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedTicket(null)}
              className="p-2 hover:bg-white/5 rounded-xl transition-all text-white/40 hover:text-white"
            >
              <X size={24} />
            </button>
            <div>
              <h2 className="text-2xl font-extrabold">{selectedTicket.subject}</h2>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-white/40 text-xs uppercase font-bold tracking-widest">Ticket #{selectedTicket.id}</p>
                <span className={clsx(
                  "text-[9px] font-bold uppercase px-2 py-0.5 rounded-md",
                  selectedTicket.status === 'Fechado' ? "bg-green-500/10 text-green-400" : "bg-brand-primary/10 text-brand-primary"
                )}>{selectedTicket.status}</span>
                {selectedTicket.priority === 'Alta' && (
                  <span className="bg-red-500/10 text-red-400 text-[9px] font-bold uppercase px-2 py-0.5 rounded-md">Urgente</span>
                )}
              </div>
            </div>
          </div>
          
          <button 
            onClick={async () => {
              const res = await fetch(`/api/users/personal-data`);
              if (res.ok) {
                const data = await res.json();
                const ticketData = data.tickets.find(t => t.id === selectedTicket.id);
                const blob = new Blob([JSON.stringify({ ticket: ticketData, messages }, null, 2)], { type: 'application/json' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `ticket_${selectedTicket.id}_hermida_maia.json`;
                a.click();
              }
            }}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/40 hover:text-white transition-all"
            title="Exportar conversa"
          >
            <Download size={20} />
          </button>
        </div>

        <div className="bg-brand-elevated rounded-[2.5rem] border border-white/5 flex flex-col h-[600px] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary/20 via-brand-primary to-brand-primary/20 opacity-30" />
          <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide overflow-x-auto">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-white/20 space-y-4">
                <MessageSquare size={48} />
                <p className="font-medium italic">Carregando histórico de mensagens...</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className={clsx("flex flex-col", msg.is_admin ? "items-start" : "items-end")}>
                  <div className={clsx(
                    "max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed shadow-xl transition-all hover:scale-[1.01]",
                    msg.is_admin 
                      ? "bg-white/5 border border-white/10 text-white/90 rounded-tl-none" 
                      : "bg-brand-primary text-white rounded-tr-none shadow-brand-primary/10"
                  )}>
                    {msg.message}
                  </div>
                  <div className="flex items-center gap-2 mt-3 px-2">
                    {msg.is_admin && <ShieldCheck size={12} className="text-brand-primary" />}
                    <span className="text-[10px] text-white/20 font-bold uppercase tracking-wider">
                      {msg.is_admin ? "Equipe Hermida Maia" : "Você"} • {new Date(msg.created_at).toLocaleString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-white/10 bg-brand-dark/50 backdrop-blur-md">
            {selectedTicket.status === 'Fechado' ? (
              <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/10">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Este chamado foi encerrado. Envie uma mensagem para reabri-lo.</p>
              </div>
            ) : null}
            <div className="relative mt-2">
              <textarea 
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Digite sua resposta aqui..."
                className="w-full bg-brand-dark border border-white/10 rounded-2xl py-5 pl-6 pr-20 text-sm text-white outline-none focus:border-brand-primary transition-all resize-none min-h-[120px] shadow-inner placeholder:text-white/20"
              />
              <div className="absolute right-4 bottom-4 flex items-center gap-2">
                <button 
                  onClick={handleSendReply}
                  disabled={!reply.trim() || sendingReply}
                  className="p-4 bg-brand-primary text-white rounded-2xl hover:bg-brand-primary/90 disabled:opacity-30 transition-all shadow-lg shadow-brand-primary/20 group"
                >
                  {sendingReply ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </div>
            </div>
            <p className="text-[9px] text-white/20 mt-4 text-center uppercase font-bold tracking-widest">Sua conversa é protegida por criptografia e auditada para conformidade LGPD.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold">Suporte ao Cliente</h2>
        <button 
          onClick={() => setIsCreating(true)}
          className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-brand-primary/20"
        >
          <Plus size={18} />
          Novo Chamado
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-brand-primary" size={40} /></div>
      ) : tickets.length > 0 ? (
        <div className="grid gap-4 overflow-x-auto">
          {tickets.map((ticket, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedTicket(ticket)}
              className="bg-brand-elevated p-6 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-brand-primary/30 transition-all text-left group shadow-lg focus-visible:ring-2 focus-visible:ring-brand-primary"
              tabIndex={0}
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className={clsx(
                  "w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner",
                  ticket.status === 'Fechado' ? "bg-green-500/10 text-green-400" : "bg-brand-primary/10 text-brand-primary"
                )}>
                  <MessageSquare size={28} />
                </div>
                <div>
                  <p className="font-bold text-lg group-hover:text-brand-primary transition-colors">{ticket.subject}</p>
                  <p className="text-white/40 text-xs">Última atualização: {new Date(ticket.updated_at).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className={clsx(
                  "text-[10px] font-bold uppercase px-3 py-1 rounded-full",
                  ticket.priority === 'Alta' ? "bg-red-500/10 text-red-400" : "bg-white/5 text-white/40"
                )}>
                  {ticket.priority}
                </span>
                <span className={clsx(
                  "text-[10px] font-bold uppercase px-3 py-1 rounded-full",
                  ticket.status === 'Aberto' ? "bg-brand-primary/10 text-brand-primary" : 
                  ticket.status === 'Em Atendimento' ? "bg-yellow-500/10 text-yellow-400" : "bg-green-500/10 text-green-400"
                )}>
                  {ticket.status}
                </span>
                <ChevronRight className="text-white/10 group-hover:text-brand-primary transition-all" size={20} />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-brand-elevated p-16 rounded-[2.5rem] border border-white/5 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
            <MessageSquare size={40} />
          </div>
          <p className="text-white/40 font-medium">Você ainda não abriu nenhum chamado de suporte.</p>
        </div>
      )}

      {isCreating && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm">
          <div className="bg-brand-elevated w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">Abrir Novo Chamado</h2>
              <button onClick={() => setIsCreating(false)} className="p-2 hover:bg-white/5 rounded-full transition-all"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <CustomForm 
                id="ticket_form"
                schema={allConfigs['ticket_form'].jsonSchema as any}
                onSubmit={async (data) => {
                  try {
                    const res = await fetch('/api/tickets', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    if (res.ok) {
                      setIsCreating(false);
                      fetchTickets();
                      setFeedback({ type: 'success', message: 'Ticket criado com sucesso. Você será notificado quando nossa equipe responder.' });
                    } else {
                      setFeedback({ type: 'error', message: 'Não foi possível criar o ticket. Tente novamente.' });
                    }
                  } catch {
                    setFeedback({ type: 'error', message: 'Erro ao criar ticket. Verifique sua conexão.' });
                  } finally {
                    setTimeout(() => setFeedback(null), 4000);
                  }
                }}
                theme={contactFormTheme}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPortal;
