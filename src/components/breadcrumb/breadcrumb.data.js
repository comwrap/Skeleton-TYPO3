const casual = require('../../../casual')

const item = () => ({
	href: casual.href()
})

module.exports = {
	content: [
		item(),
		item(),
		item()
	]
}