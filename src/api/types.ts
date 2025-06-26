export interface MasterProfile {
  id: string;
  avatar: string | null;
  countryCode: string;
  description: string | null;
  name: string;
  phoneCode: string;
  phoneNumber: string;
  portfolio: string[];
  socials: any;
  username: string;
  workingHours: {
    [key: string]: {
      end: number;
      start: number;
      closed: boolean;
    };
  };
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}