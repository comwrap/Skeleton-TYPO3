module.exports = (filePath, data) => require('rosid-handler-njk')(filePath, {
	localOverwrites: false,
	src: 'src/components',
	data
})