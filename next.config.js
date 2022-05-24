/** @type {import('next').NextConfig} */

/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const commonConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  images: {
    loader: 'default',
  },
  reactStrictMode: true,
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins

const configDev = withPlugins([withBundleAnalyzer], commonConfig);

const nextPlugins = [
  nextConfig =>
    process.env.NEXT_PUBLIC_SENTRY_DSN
      ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
      : nextConfig,
];

const configProd = withPlugins(nextPlugins, commonConfig);

module.exports =
  process.env.NODE_ENV === 'production' && !process.env.ANALYZE ? configProd : configDev;
