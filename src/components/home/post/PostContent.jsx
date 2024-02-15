import React from 'react'
import styled from 'styled-components'
import PostImage from './PostImage'
import PostVideo from './PostVideo'
const Container = styled.div`
    width: 100%;   
`
const PostContent = ({type,url}) => {

  return (
    < Container>
    {type === 'video' ? <PostVideo  url={url}/> :<PostImage url={url} /> }
    </ Container>
  )
}

export default PostContent
