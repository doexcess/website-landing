// Business Information API Response Types

export interface BusinessProfile {
  profile_picture: string;
  gender: 'male' | 'female' | 'other' | null;
  bio: string | null;
  state: string | null;
  country: string;
}

export interface User {
  id: string;
  name: string;
  profile: BusinessProfile;
}

export interface BusinessInfo {
  id: string;
  user_id: string;
  business_name: string;
  business_size: 'small' | 'medium' | 'large' | 'enterprise';
  timeline: string; // Timezone string like "Africa/Lagos"
  logo_url: string | null;
  industry: string;
  working_hours: string | null;
  location: string;
  state: string;
  country: string;
  country_code: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  user: User;
}

export interface BusinessInfoResponse {
  statusCode: number;
  message: string;
  data: BusinessInfo;
}

// Form data types for business onboarding
export interface BusinessOnboardFormData {
  business_name: string;
  business_size: BusinessInfo['business_size'];
  industry: string;
  location: string;
  state: string;
  country: string;
  country_code: string;
  logo_url?: string;
  working_hours?: string;
}

// User profile form data
export interface UserProfileFormData {
  name: string;
  profile_picture?: string;
  gender?: BusinessProfile['gender'];
  bio?: string;
  state?: string;
  country: string;
}
