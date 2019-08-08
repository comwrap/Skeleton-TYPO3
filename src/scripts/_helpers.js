export const delay = (fn, delay) => {

	setTimeout(() => {
		requestAnimationFrame(fn)
	}, delay)

}