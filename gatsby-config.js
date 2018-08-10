module.exports = {
  siteMetadata: {
    title: 'Alexander Nanberg',
    siteUrl: 'https://alexandernanberg.com',
    description: 'Full-stack developer & designer based in Örebro, Sweden.',
  },
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
        background_color: '#fff',
        theme_color: '#000',
        display: 'browser',
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
