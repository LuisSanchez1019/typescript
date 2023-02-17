/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swMinfy: true,
  experimental:{
    appDir: true,
  },
  env:{
    API_URL: "https://jsonplaceholder.typicode.com",
  }
};   


module.exports = nextConfig
