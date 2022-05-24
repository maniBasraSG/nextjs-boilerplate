module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.{ts,tsx,json,css,html}': ['prettier --write'],
};
