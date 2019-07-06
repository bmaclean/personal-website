module.exports = {
	siteMetadata: {
		title: 'Brendan Maclean Web Services',
		description:
			'Creating professional, high-powered web experiences for local businesses.',
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
				name: 'Brendan Maclean Web Services',
				short_name: 'bmwebservices',
				start_url: '/',
				background_color: '#0B1722',
				theme_color: '#3D52D5',
				display: 'minimal-ui',
				icon: 'src/images/curly_brackets.png'
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
