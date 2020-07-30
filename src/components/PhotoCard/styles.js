import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'


export const Article = styled.article`
  min-height: 200px;
`
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden; /*No se escape nada*/
  padding: 56.25% 0 0 0; /*el contenido de la imagen hacia arriba*/ 
  position: relative;
  width: 100%; 
`

export const Img = styled.img`
  ${fadeIn({ time: '10s'})}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`