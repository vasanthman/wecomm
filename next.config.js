module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["uploads.we-citizens.com"],
  },
};
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ["uploads.we-citizens.com"],
  },
});
module.exports = {
  optimizeFonts: true,
};
module.exports = {
  images: {
    domains: ["uploads.we-citizens.com"],
  },
};
// const ContentSecurityPolicy = `
//   default-src 'self' we-graphql-staging.herokuapp.com;
//   script-src 'self' 'sha256-gIT8CU616X5Snvf652sJfhcD0aOTK30HOBzer6Hdavo=' www.googletagmanager.com 'unsafe-inline';
//   child-src dev-app.we-citizens.com blob:;
//   style-src 'unsafe-hashes' 'unsafe-inline' dev-app.we-citizens.com;
//   font-src 'self' data:;
//   img-src 'self' uploads.we-citizens.com we-citizens.mo.cloudinary.net data: blob: *.tile.openstreetmap.org;
//   media-src 'self' we-citizens.mo.cloudinary.net  data: blob: dev-app.we-citizens.com;
//   object-src 'self' uploads.we-citizens.com;
//   connect-src 'self' cognito-idp.us-east-1.amazonaws.com we-graphql-staging.herokuapp.com n3b49eibke.execute-api.us-east-1.amazonaws.com firebaseinstallations.googleapis.com fcmregistrations.googleapis.com maps.googleapis.com rlp-proxy.herokuapp.com api.cloudinary.com;

// `
// const securityHeaders = [
//   {
//     key: 'X-XSS-Protection',
//     value: '1; mode=block'
//   },
//   {
//     key: 'X-Frame-Options',
//     value: 'SAMEORIGIN'
//   },

//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=63072000; includeSubDomains; preload'
//   },

//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff'
//   },
//   {
//     key: 'Referrer-Policy',
//     value: 'same-origin'
//   },
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
//   }
// ]

// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: '/:path*',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
     {
       source  : '/api/:path*',
       //destination : `https://api.we-citizens.com/:path*`
       destination : `${process.env.NEXT_PUBLIC_API}/:path*`
     }
 
     ]
   },
   images: {
     domains: ["uploads.we-citizens.com"],
   }
}

