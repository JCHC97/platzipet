import React from 'react'
import { Layout } from '../components/Layout'
import { FavsWithQuery } from '../containers/GetFavorites'

export default () => (
  <Layout title='Tus Favoritos' subtitle='Tus mascotas favoritas'>
	<FavsWithQuery />
  </Layout>
)