const webpack = require('webpack')

const __DEV__ = process.env.NODE_ENV === 'development'

exports.onCreateWebpackConfig = ({ actions, _loaders, getConfig }) => {
  const config = getConfig()
  config.module.rules.push({
    test: /\.(js|tsx?)$/,
    include: /node_modules/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        env: {
          production: {
            plugins: ['react-native-paper/babel'],
          },
        },
        presets: [
          ['@babel/preset-env', { useBuiltIns: 'usage' }],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          [
            'module-resolver',
            {
              root: ['./src'],
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
          ],
        ],
      },
    },
  })
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__,
    }),
  ]
  actions.replaceWebpackConfig(config)
}
