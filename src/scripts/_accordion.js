export const init = (elem) => {

	const itemElems = elem.querySelectorAll('.accordion__item')

	itemElems.forEach((itemElem) => {

		const headElem = itemElem.querySelector('.accordion__head')

		headElem.onclick = () => {
			itemElem.classList.toggle('active')
		}

	})

}

document.querySelectorAll('.accordion').forEach(init)