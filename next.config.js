module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === "development" ? "http://localhost:3000/api/:path*" : "/api/:path*",
      },
    ]
  },
}
