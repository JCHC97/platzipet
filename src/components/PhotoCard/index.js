import React, { useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Article, ImgWrapper, Img} from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'




export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
	const [show, element] = useNearScreen()


	return (
		<Article ref={element}> 
			{
				show && <>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</Link>
					<ToggleLikeMutation>
						{
							(toggleLike) => {
								const handleFavCick = () => {
									toggleLike({ variables: {
										input: {id}
									}})
								}
								return <FavButton liked={liked} likes={likes} onClick={handleFavCick} />
							}
						}
					</ToggleLikeMutation>
				</>
			}
		</Article>
	)
}

PhotoCard.propTypes = {
	id: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired
	likes: function (props, propName, componentName) {
		const propValue = props[propName]

		if(propValue === undefined){
			return new Error(`${propName} value must be defined`)
		}

		if(propValue < 0){
			return new Error(`${propName} value must be greater than 0`)
		}
	}
}