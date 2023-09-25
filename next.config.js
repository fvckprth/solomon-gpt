/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true
    },
    images: {
      domains: ['raowzlhjbnhwmhypswgo.supabase.co'],
    },
  }
  
  module.exports = nextConfig