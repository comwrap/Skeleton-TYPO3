const casual = require('../../../casual')
const render = require('../../../render')

const content = render('src/components/content/content.njk', require('../content/content.data'))

const item = async () => ({
	headline: casual.headline(),
	bodytext: await content
})

module.exports = async () => ({
	content: [
		await item(),
		await item(),
		await item()
	]
})