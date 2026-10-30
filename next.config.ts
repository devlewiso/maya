import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // La constancia de logro se reemplazó por la insignia (oct 2026): los enlaces viejos llevan a su equivalente.
  async redirects() {
    return [
      { source: '/dashboard/constancias', destination: '/dashboard/insignias', permanent: true },
      { source: '/dashboard/constancia/:id', destination: '/dashboard/insignia/:id', permanent: true },
      { source: '/verificar/:codigo', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "connect-src 'self' https://agentclaw.nosotros.space wss://agentclaw.nosotros.space https://www.google-analytics.com",
              "frame-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
