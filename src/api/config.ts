const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  timeout: 10000,
};