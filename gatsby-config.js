module.exports = {
	siteMetadata: {
		title: 'Brendan Maclean Freelance',
		description: 'Brendan Maclean Freelance creates responsive, aesthetic, and blazingly fast web experiences at an affordable price.',
		author: '@bmaclean'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Brendan Maclean Freelance',
				short_name: 'bmacfreelance',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui'
				// icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
