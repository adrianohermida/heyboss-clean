import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
type Cat = { id: number; nome: string };
type Post = { id: string; slug: string; titulo: string; resumo?: string; meta_descricao?: string; imagem_capa_url?: string; categoria_id: number; data_publicacao?: string; created_at?: string };
type Props = { post: Post; category: Cat|null };
const BlogPostCard: React.FC<Props> = ({ post, category }) => (
  <article className="bg-[var(--color-cardElevated)] rounded-2xl overflow-hidden border border-[var(--color-border)]/10 group hover:border-[var(--color-accent)] transition-all flex flex-col h-full shadow-xl hover:shadow-[0_4px_32px_0_var(--color-accent)]">
    <Link to={`/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden block relative" aria-label={`Abrir artigo: ${post.titulo}`}>
      <picture>
        <source type="image/avif" srcSet={post.imagem_capa_url?.replace('.jpg', '.avif').replace('.png', '.avif') || 'https://heyboss.heeyo.ai/gemini-image-c5df3e56df0a49fdb468a4708ef7c8a8.webp'} />
        <source type="image/webp" srcSet={post.imagem_capa_url?.replace('.jpg', '.webp').replace('.png', '.webp') || 'https://heyboss.heeyo.ai/gemini-image-c5df3e56df0a49fdb468a4708ef7c8a8.webp'} />
        <img 
          src={post.imagem_capa_url || 'https://heyboss.heeyo.ai/gemini-image-c5df3e56df0a49fdb468a4708ef7c8a8.webp'}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          alt={post.resumo ? `Imagem ilustrativa do artigo: ${post.titulo} - ${post.resumo}` : `Imagem ilustrativa do artigo: ${post.titulo}`}
          loading="lazy"
        />
      </picture>
      <div className="absolute top-4 left-4">
        <span className="bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">{category?.nome || 'Artigo'}</span>
      </div>
    </Link>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 text-[var(--color-text)]/60 text-xs font-bold uppercase tracking-wider mb-2">
        <Calendar size={14} className="text-[var(--color-accent)]" />
        {new Date(post.data_publicacao || post.created_at).toLocaleDateString('pt-BR')}
      </div>
      <Link to={`/blog/${post.slug}`} aria-label={`Abrir artigo: ${post.titulo}`}>
        <h3 className="text-lg md:text-xl font-bold text-[var(--color-brand)] mb-2 leading-tight group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">{post.titulo}</h3>
      </Link>
      <p className="text-[var(--color-text)]/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.resumo || post.meta_descricao}</p>
      <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm group/btn focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]" aria-label={`Ler artigo completo: ${post.titulo}`}>
        Ler Artigo Completo
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  </article>
);
export default BlogPostCard;
