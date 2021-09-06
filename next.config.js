// module.exports = {
//   reactStrictMode: true,
// }

//CSS AND SCSS
const path = require('path')
module.exports = {
  reactStrictMode: true,

  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  env: {
    // backendURL: 'http://localhost:5000/api',
    // backendURL: 'http://localhost:5000/api',
    backendURL: process.env.DB_BACKENDURL+'/api',
    backendURLMAIN: process.env.DB_BACKENDURL
  },
  // images: {
  //   domains: [process.env.DB_DOMAIN1, process.env.DB_DOMAIN2],
  // },
}