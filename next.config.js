module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/products/:path*',
        destination: 'https://fakestoreapi.com/products/:path*', // Proxy to the Fake Store API for products
      },
      {
        source: '/api/files/:path*',
        destination: 'https://api.escuelajs.co/api/v1/files/:path*', // Proxy to the Escuela API for file uploads
      },
    ];
  },
};
