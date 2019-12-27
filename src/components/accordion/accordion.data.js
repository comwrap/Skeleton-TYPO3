const render = require('../../../render')

const content = render('src/components/content/content.njk', require('../content/content.data'))

const item = async () => ({
	headline: {
		text: 'Lorem ipsum'
	},
	bodytext: await content
})

module.exports = async () => ({
	content: [
		await item(),
		await item(),
		await item()
	]
})