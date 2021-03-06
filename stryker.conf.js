module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'yarn',
    reporters: ['html', 'clear-text', 'progress'],
    htmlReporter: {
      baseDir: '.stryker-reports'
    },
    testRunner: 'jest',
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: ['src/**/*.ts', '!src/**/*.spec.ts'],
    jest: {
      enableFindRelatedTests: true
    }
  });
};
