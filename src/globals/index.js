export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.API_URL}/api`
    : 'http://localhost:3001/api'
