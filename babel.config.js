module.exports = {
    plugins: [

    ],
    presets: [
      '@babel/preset-react',
      [ 
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };