module.exports = [
	{
		name: 'JS',
		path: 'scripts/**/[^_]*.js',
		handler: 'rosid-handler-js'
	},
	{
		name: 'SASS',
		path: 'styles/**/[^_]*.{css,scss}*',
		handler: 'rosid-handler-sass',
		opts: {
			in: '.scss'
		}
	},
	{
		name: 'NJK',
		path: 'components/[^_]*/[^_]*.{html,njk}*',
		handler: 'rosid-handler-njk',
		opts: {
			prepend: '{% extends "../_layout.njk" %}{% block body %}',
			append: '{% endblock %}',
			src: 'src/components/',
			data: 'data.js'
		}
	},
	{
		name: 'Malvid',
		path: 'index.{html,html.json}',
		handler: 'rosid-handler-malvid',
		opts: {
			src: 'src/'
		}
	}
]