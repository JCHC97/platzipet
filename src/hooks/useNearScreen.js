import { useState, useEffect, useRef } from 'react'

export function useNearScreen () {
	const [show, setShow] = useState(false)
	const element = useRef(null) //Referencia del elemento del DOM
	
	useEffect(() => {
		Promise.resolve(
		typeof window.IntersectionObserver !== 'undefined'
			? window.IntersectionObserver
			: import('intersection-observer')
		)
		.then(() => {
			const observer = new window.IntersectionObserver(function(entries){
				const { isIntersecting } = entries[0]
				if(isIntersecting){
					console.log('si')
					setShow(true)
					observer.disconnect()
				}
			})
			observer.observe(element.current)
		})
	}, [element])

	return[ show, element ]
}