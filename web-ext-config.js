module.exports = {
  // Global options:
  verbose: true,
  // Command options:
  build: {
    overwriteDest: true,
  },
  ignoreFiles: [
    'package-lock.json',
    'yarn.lock',
    'main.js',
    'make.js',
    'web-ext-config.js',
    'Dockerfile',
    'tests',
    'dist',
    'test_harnesses',
    'sign.sh',
  ]
};
