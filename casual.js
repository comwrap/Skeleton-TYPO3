const casual = require('casual')

casual.define('headline', (text) => ({
	text: text || casual.title,
	type: 'h2',
	style: 'h2',
	position: 'left'
}))

casual.define('subheadline', (text) => ({
	text: text || casual.title,
	type: 'h2',
	style: 'h2',
	position: 'left'
}))

casual.define('text', (n) => `
	${ casual.sentences(n || 1) }
`)

casual.define('bodytext', (n) => `
	<p>${ casual.sentences(1) } Esse <span class="mark">amet consequatur excepturi</span> porro lorem <b>ipsum</b> <i>dolor</i>. ${ casual.sentences(n || 1) }<p>
`)

casual.define('href', (label) => ({
	label: label || casual.title,
	value: '#',
	target: '_self'
}))

casual.define('image', (src) => ({
	title: casual.text,
	alternative: casual.title,
	description: casual.sentence,
	link: '#',
	src: src || 'https://source.unsplash.com/user/heysupersimi/1200x800',
	x: 0.5,
	y: 0.5
}))

module.exports = casual