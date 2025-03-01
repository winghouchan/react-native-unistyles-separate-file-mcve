module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],

    // other config
    plugins: [
      // other plugins
      [
        'react-native-unistyles/plugin',
        { autoProcessRoot: 'components', debug: true },
      ],
    ],
  };
};
