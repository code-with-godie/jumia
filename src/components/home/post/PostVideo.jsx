import React from 'react'
import styled from 'styled-components'
const Video = styled.video`
    width: 100%;
    height:auto;
    max-height:${props => props.mH  || '400px'};
    object-fit: contain;
    background-color: #000000ef;
`
const PostVideo = ({url}) => {
  return <Video  muted controls src={url} />
}
export default PostVideo
