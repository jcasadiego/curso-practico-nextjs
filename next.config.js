const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode:true,
  images: {
    domains: [
      'api.lorem.space',
      'placeimg.com',
      'i.picsum.photos',
      'google.pl'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}