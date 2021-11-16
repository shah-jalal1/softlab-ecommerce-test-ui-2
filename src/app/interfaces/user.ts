export interface User {
  _id?: string;
  fullName: string;
  username?: string;
  gender?: string;
  birthdate?: Date;
  email?: string;
  phoneNo?: string;
  address?: string;
  profileImg?: string;
  password?: string;
  checkouts?: any[];
  isPhoneVerified?: boolean;
  isEmailVerified?: boolean;
  registrationType?: string;
  registrationAt?: Date;
  hasAccess?: boolean;
  occupation?: string;
  createdAt?: any;
  updatedAt?: any;
}
