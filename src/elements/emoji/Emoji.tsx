import React from 'react'
import styled from "styled-components"

interface Props {
  width?: number;
  height?: number;
  src: string;
}

const EmojiImg = styled.img<Props>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

const Emoji = ({ width, height, src } : Props) => {
  return (
    <EmojiImg width={width} height={height} src={src}/>
  )
}

export default Emoji;