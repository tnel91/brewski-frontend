console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_API_URL)
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_API_URL}/api`
    : 'http://localhost:3001/api'
