export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  profileId: string;
  theme: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: string;
  priceType: string;
  categoryId: string;
  onlineBooking: boolean;
  variablePrice: boolean;
  profileId: string;
  createdAt: string;
  updatedAt: string;
}

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
  address: string | null;
  services: Service[] | null;
  serviceCategories: ServiceCategory[] | null;
  workingHours: {
    [key: string]: {
      end: number;
      start: number;
      closed: boolean;
    };
  };
  profileSettings?: {
    currency: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}