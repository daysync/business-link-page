import { request } from './request';
import { ApiResponse, MasterProfile } from './types';

export * from './types';
export { ApiError } from './request';

export const getProfile = async (username?: string): Promise<MasterProfile> => {
  const masterUsername = username || process.env.NEXT_PUBLIC_MASTER_USERNAME || 'john-doe';
  
  const response = await request.get<ApiResponse<MasterProfile>>(
    `public/${masterUsername}`
  );
  
  if (!response.success) {
    throw new Error(response.message || 'Failed to fetch master profile');
  }
  
  return response.data;
};