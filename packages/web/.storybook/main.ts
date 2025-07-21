import type { StorybookConfig } from "@storybook/react-webpack5";
import * as path from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Добавляем поддержку TypeScript
    config.module?.rules?.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    // Находим и модифицируем существующее правило для CSS
    const cssRule = config.module?.rules?.find( rule =>
      rule && typeof rule === 'object' && 'test' in rule && rule.test && rule.test.toString().includes( 'css' )
    );

    if ( cssRule && config.module?.rules )
    {
      // Заменяем существующее правило CSS
      const cssRuleIndex = config.module.rules.indexOf( cssRule );
      config.module.rules[ cssRuleIndex ] = {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve( __dirname, '../postcss.config.js' ),
              },
            },
          },
        ],
      };
    } else
    {
      // Добавляем новое правило если не найдено
      config.module?.rules?.push( {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve( __dirname, '../postcss.config.js' ),
              },
            },
          },
        ],
      } );
    }

    return config;
  },
  staticDirs: [ '../public' ],
  docs: {
    autodocs: 'tag',
  },
};

export default config; 