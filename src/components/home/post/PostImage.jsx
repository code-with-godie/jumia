import React from 'react'
import styled from 'styled-components'
const ContainerImage = styled.div`
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height:auto;
    max-height: 550px;
    object-fit: contain;
`
const PostImage = ({url}) => {
  return <Image  src={url}  />
}

export default PostImage
