import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
  	if (loading) return <p> Loading... </p>
  	if (error) return <p> Erro! </p>
    if(data){ const { photo = {} } = data
    	return <PhotoCard {...photo} />
    }	
    return null
 } 

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
)