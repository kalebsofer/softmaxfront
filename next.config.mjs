/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // The Apple AASA file MUST be served as application/json with no redirects.
    // It has no extension, so Next/Node would otherwise default to
    // application/octet-stream. Also pin Content-Type on assetlinks.json for parity.
    // If you reverse-proxy this app, ensure the proxy preserves Content-Type and
    // does NOT redirect /.well-known/apple-app-site-association.
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
};

export default nextConfig;
