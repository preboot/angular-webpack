/*
 * Options to generate 'service-worker.js', used to register
 * a service worker to the browser.
 * Reference: https://github.com/GoogleChrome/sw-precache
 */

module.exports = {
  // Files and directories that will be pre-cached
  staticFileGlobs: [
    'dist/**.html',
    'dist/js/**.js',
    'dist/css/**.css',
    'dist/img/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  // For more information on runtime caching:
  // https://github.com/GoogleChrome/sw-precache#runtime-caching
  runtimeCaching: [{
    urlPattern:  /^https:\/\/example\.com\/api/,
    handler: 'networkFirst'
  }]
};
