import React from 'react'

interface Props{
  source: string
  alt: string
  width?: number
  height?: number
}

const Illustration = (props: Props) => {
  return <img src={props.source} width={props.width} height={props.height} alt={props.alt}></img>
}
export default Illustration
