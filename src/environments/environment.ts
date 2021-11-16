// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseLink: 'http://localhost:3000',
  ftpBaseLink: 'http://localhost:3000',
  // apiBaseLink: 'https://api.emedilife.softlabit.com',
  // ftpBaseLink: 'https://api.emedilife.softlabit.com',
  appBaseUrl: '/',
  userBaseUrl: '/account',
  userLoginUrl: '/login',
  adminLoginUrl: 'admin/login',
  adminBaseUrl: 'admin',
  storageSecret: 'SOFT_2021_IT_1998',
  sslIpnUrl: 'https://api.emedilife.softlabit.com/api/payment-ssl/ipn',
  smsUser: 'UIO',
  smsPass: 'ABC',
  smsSid: 'XYZ',
  VERSION: 1
};

