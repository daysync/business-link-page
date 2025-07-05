import { request } from './request';
import { ApiResponse, MasterProfile } from './types';

export * from './types';
export { ApiError } from './request';

export const getProfile = async (username?: string): Promise<MasterProfile> => {
  const masterUsername = username || process.env.NEXT_PUBLIC_MASTER_USERNAME || 'john-doe';
  
  try {
    // Use our internal API endpoint instead of direct external calls
    const response = await fetch(`/api/profile/${masterUsername}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Profile not found');
      }
      throw new Error(`Failed to fetch profile: ${response.status}`);
    }

    const profileData: MasterProfile = await response.json();
    return profileData;
    
  } catch (error) {
    console.error('Profile fetch error:', error);
    throw error;
  }
};