
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Globe, Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import { CustomForm } from '../CustomForm';
import { contactFormTheme } from '../CustomForm/themes';

interface BlogEditorProps {
  post?: any;
  categories: any[];
  onBack: () => void;
}

function BlogEditor({ post, categories, onBack }: BlogEditorProps) {
  // ...existing code...
  // (You should re-insert the valid BlogEditor function implementation here, as previously refactored)
}

export default BlogEditor;
            className="bg-white/5 hover:bg-white/10 text-brand-primary px-4 py-2 rounded-lg text-sm font-bold transition-all border border-brand-primary/20 flex items-center gap-2"
          >
            <Sparkles size={18} />
            Sugestões IA
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-brand-elevated p-8 rounded-3xl border border-white/5 shadow-xl">
            <CustomForm 
              id="blog_post_form"
              schema={schema}
              formData={formData}
              onChange={handleFormChange}
              onSubmit={handleSubmit}
              theme={contactFormTheme}
              labels={{ submit: post ? 'Salvar Alterações' : 'Publicar Artigo' }}
              renderActions={({ isSubmitting, onSubmit }) => (
                <div className="pt-8 border-t border-white/5 flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={onBack}
                    className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all border border-white/10"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving || isSubmitting}
                    onClick={onSubmit}
                    className="bg-brand-primary text-white px-6 py-2 rounded-lg text-sm font-bold transition-all hover:bg-brand-primary/90 disabled:opacity-50"
                  >
                    {isSaving || isSubmitting ? <Loader2 size={18} className="animate-spin inline-block mr-2" /> : <Save size={18} className="inline-block mr-2" />}
                    {post ? 'Salvar Alterações' : 'Publicar Artigo'}
                  </button>
                </div>
              )}
            />
          </div>

          {/* Imagem de capa */}
          <div className="bg-brand-elevated p-8 rounded-3xl border border-white/5 shadow-xl flex flex-col gap-4">
            <label className="font-bold text-white/80">Imagem de Capa</label>
            <div className="flex items-center gap-4">
              {formData.imagem_capa_url && (
                <img src={formData.imagem_capa_url} alt="Capa" className="w-32 h-20 object-cover rounded-xl border border-white/10" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="block text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20"
              />
              {uploading && <Loader2 size={18} className="animate-spin text-brand-primary" />}
            </div>
          </div>
        </div>

        {/* SEO Preview */}
        <div className="space-y-8">
          <div className="bg-brand-elevated p-8 rounded-3xl border border-white/5 shadow-xl">
            <label className="font-bold text-white/80 mb-2 block">Prévia SEO</label>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-brand-primary font-bold text-lg">{formData.titulo || 'Título do Artigo'}</p>
              <p className="text-white/60 text-sm mt-1">{formData.meta_descricao || 'Meta descrição do artigo para SEO.'}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {(formData.tags || '').split(',').map((tag: string, i: number) => tag && (
                  <span key={i} className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded text-xs font-bold">{tag.trim()}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Globe size={16} className="text-white/30" />
                <span className="text-xs text-white/30">heyboss.com/blog/{formData.slug || 'slug-do-artigo'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogEditor;
                      <span className="text-white/30 text-xs font-bold uppercase">Upload de Imagem</span>
                    </>
                  )}
                  <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                </label>
              )}
            </div>
          </div>

          {/* SEO Preview */}
          <div className="bg-brand-elevated p-6 rounded-3xl border border-white/5 shadow-xl">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Globe size={18} className="text-brand-primary" />
              Prévia no Google
            </h4>
            <div className="space-y-1">
              <p className="text-[#1a0dab] text-lg font-medium hover:underline cursor-pointer truncate">
                {formData.meta_titulo || formData.titulo || 'Título do Artigo'}
              </p>
              <p className="text-[#006621] text-sm truncate">
                hermidamaia.adv.br › blog › {formData.slug || '...'}
              </p>
              <p className="text-white/50 text-sm line-clamp-2">
                {formData.meta_descricao || formData.resumo || 'A descrição do seu artigo aparecerá aqui nos resultados de busca...'}
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-brand-primary/10 p-6 rounded-3xl border border-brand-primary/20">
            <h4 className="text-brand-primary font-bold mb-2 flex items-center gap-2">
              <Sparkles size={18} />
              Dica de SEO
            </h4>
            <p className="text-white/70 text-xs leading-relaxed">
              Use palavras-chave como "superendividamento", "lei 14.181" e "renegociação de dívidas" no título e nos primeiros parágrafos para melhorar seu ranking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
