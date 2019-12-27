import cookie from 'js-cookie'
import { delay } from './_helpers'

export const init = (elem) => {

	const cookieKey = 'cookieAccepted'
	const shouldShow = cookie.get(cookieKey) !== 'true'

	const show = () => {

		cookie.set(cookieKey, 'false')

		// Wait a while to ensure that the class change triggers the animation
		delay(() => elem.classList.add('visible'), 400)

	}

	const close = () => {

		cookie.set(cookieKey, 'true')
		elem.classList.remove('visible')

		// Wait a while to ensure that the class change triggers the animation
		// and that the fade out transition has finished.
		delay(remove, 400)

	}

	const remove = () => {

		elem.remove()

	}

	elem.querySelector('.cookie__button').onclick = close

	if (shouldShow === true) show()
	else remove()

}

document.querySelectorAll('.cookie').forEach(init)