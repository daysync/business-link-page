import superagent from 'superagent';
import { apiConfig } from './config';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleError = (error: any) => {
  if (error.response) {
    throw new ApiError(
      error.response.body?.message || 'API request failed',
      error.response.status,
      error.response.body
    );
  }
  
  if (error.timeout) {
    throw new ApiError('Request timeout', 408);
  }
  
  throw new ApiError(error.message || 'Network error', 0);
};

export const request = {
  async get<T = any>(endpoint: string): Promise<T> {
    try {
      const response = await superagent
        .get(`${apiConfig.baseUrl}/${endpoint}`)
        .timeout(apiConfig.timeout);
      
      return response.body;
    } catch (error) {
      throw handleError(error);
    }
  },

  async post<T = any>(endpoint: string, data?: any): Promise<T> {
    try {
      const response = await superagent
        .post(`${apiConfig.baseUrl}/${endpoint}`)
        .send(data)
        .timeout(apiConfig.timeout);
      
      return response.body;
    } catch (error) {
      throw handleError(error);
    }
  },
};