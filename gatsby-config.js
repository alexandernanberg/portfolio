module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-49046301-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alexander Nanberg',
        short_name: 'AN',
        start_url: '/',
        background_color: '#000',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
