import React, { useState, useEffect} from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData(){
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
			.then(res => res.json())
			.then(res => {
				console.log(res)
				setCategories(res)
				setLoading(false)
			})
	}, [])

	return { categories, loading }
}


const ListOfCategoriesComponent = ( ) => {
	const {categories, loading} = useCategoriesData()
	const [showFixed, setShowFixed] = useState(false)



	useEffect(() => {
		const onScroll = e => {
			const newShowFixed = window.scrollY > 200
			showFixed !== newShowFixed && setShowFixed(newShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		return () => document.removeEventListener('scroll', onScroll)
	}, [showFixed])


	const renderList = (fixed) => (
		<List fixed={fixed}>
			{
				loading
					? <Item key='loading'><Category /> </Item> 
					: categories.map(cat =>
					<Item key={cat.id}> 
						<Category {...cat} path={`/pet/${cat.id}`}/> 
					</Item>
				)
			}
		</List>	
	)

	return (
		<>
			{renderList(false)}
			{showFixed && renderList(true)}
		</>
	)
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)