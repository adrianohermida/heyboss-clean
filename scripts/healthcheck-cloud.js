#!/usr/bin/env node

// Healthcheck script para ambiente cloud HeyBoss
// Testa Supabase e Cloudflare Worker (API)

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const SUPABASE_URL = process.env.MCP_SUPABASE_URL || process.env.VITE_SUPABASE_URL || '<SUA_SUPABASE_URL>';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.MCP_SUPABASE_API_KEY || '';
const API_URL = process.env.API_URL || 'https://api.hermidamaia.adv.br';
const AUTH_TOKEN = process.env.AUTH_TOKEN || '';

async function checkSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (res.status === 401 || res.status === 200) {
      console.log('✅ Supabase online:', SUPABASE_URL);
    } else {
      console.error('❌ Supabase erro:', res.status, await res.text());
    }
  } catch (e) {
    console.error('❌ Supabase não acessível:', e.message);
  }
}

async function checkApi(path) {
  try {
    const headers = {};
    if (AUTH_TOKEN) headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
    const res = await fetch(`${API_URL}${path}`, { headers });
    if (res.ok) {
      console.log(`✅ API ${path} online (${res.status})`);
    } else {
      console.error(`❌ API ${path} erro:`, res.status, await res.text());
    }
  } catch (e) {
    console.error(`❌ API ${path} não acessível:`, e.message);
  }
}

(async () => {
  console.log('--- Healthcheck HeyBoss Cloud ---');
  await checkSupabase();
  await checkApi('/api/blog');
  await checkApi('/api/users/me');
  await checkApi('/api/appointments/profissionais');
  // Adicione mais rotas se necessário
})();
