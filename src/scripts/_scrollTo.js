import { scrollroot } from './_helpers'

const scrollTo = function(hash) {

	const targetElem = document.querySelector(hash)

	if (targetElem == null) {
		console.warn('Could not find element with id provided in URL')
		return
	}

	const targetTop = targetElem.getBoundingClientRect().top

	scrollroot.scrollBy({
		top: targetTop,
		left: 0,
		behavior: 'smooth'
	})

}

document.querySelectorAll('a').forEach((elem) => {

	const href = elem.getAttribute('href')

	// Ignore '#' links
	if (href === '#') return

	elem.addEventListener('click', function(e) {

		// Check if the target links to the current page =
		// Everything, but the hash is equal to the current URL
		const isSamePage = (() => {

			const currentCompareURL = new URL(location.href)
			const targetCompareURL = new URL(elem.href)

			currentCompareURL.hash = ''
			targetCompareURL.hash = ''

			return currentCompareURL.href === targetCompareURL.href

		})()

		if (isSamePage === false) return

		e.preventDefault()

		const { hash } = new URL(elem.href)

		history.pushState(null, null, hash)
		scrollTo(hash)

	})

})