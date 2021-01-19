module.exports = {
  siteMetadata: {
    title: 'Iury a JS dev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Iury a JS dev',
        short_name: 'Iury a JS dev',
        start_url: '/',
        icon: 'src/images/js.jpeg',
      },
    },
  ],
};
