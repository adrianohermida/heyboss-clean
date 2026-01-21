// Centraliza a base da API para ambiente local, staging e produção
// Use sempre import { apiBase } from '../utils/apiBase' e apiBase + endpoint

export const apiBase =
  import.meta.env.VITE_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  'https://api.hermidamaia.adv.br';

// Exemplo de uso:
// fetch(`${apiBase}/api/users/me`, ...)
