/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET')
  },
  // eslint-disable-next-line sort-keys
  apiToken: {
    salt: env('API_TOKEN_SALT')
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT')
    }
  }
});
