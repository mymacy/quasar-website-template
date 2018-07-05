export default [
	{
		path: '/',
		component: () =>
			import ('layouts/default'),
		children: [{
			path: '',
			component: () =>
				import ('pages/index')
		}]
	},

	{
		path: '/about',
		component: () =>
			import ('layouts/default'),
		children: [{
			path: '',
			component: () =>
				import ('pages/about')
		}]
	},


	{ // Always leave this as last one
		path: '*',
		component: () =>
			import ('pages/404')
	}
]
