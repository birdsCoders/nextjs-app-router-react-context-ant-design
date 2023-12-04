const path = require('path');
const loaderUtils = require('loader-utils');
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'base64',
      6,
    )
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(-?\d|--)/, '_$1');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/theme')],
  },

  // Class names transformation into hash on production only
  webpack(config, { dev }) {
    if (!dev) {
      const rules = config.module.rules
        .find((rule) => typeof rule.oneOf === 'object')
        .oneOf.filter((rule) => Array.isArray(rule.use));

      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader') &&
            moduleLoader.options !== undefined &&
            moduleLoader.options.modules !== undefined
          ) {
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
          }
        });
      });
    }

    return config;
  },
};

module.exports = withNextIntl(nextConfig);
