const casual = require('../../../casual')

const item = () => ({
	...casual.href(),
	label: undefined
})

module.exports = {
	current: 5,
	content: [
		item(),
		item(),
		item(),
		item(),
		item(),
		item(),
		item(),
		item(),
		item(),
		item(),
		item(),
		item()
	]
}