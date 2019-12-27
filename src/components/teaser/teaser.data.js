const casual = require('../../../casual')

module.exports = {
	image: casual.image(),
	headline: casual.headline(),
	bodytext: casual.bodytext(),
	link: {
		href: casual.href()
	}
}