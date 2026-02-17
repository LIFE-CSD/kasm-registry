/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'LIFE Education Trust - Kasm Registry',
    description: 'Store for Kasm workspaces used at LET.',
    icon: '/img/logo.svg',
    listUrl: 'https://life-csd.github.io/kasm-registry/',
    contactUrl: 'https://lifeeducationtrust.com/',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
