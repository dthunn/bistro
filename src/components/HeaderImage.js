import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const HeaderImage = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(HeaderImage)`
  height: ${props => (props.home ? 'calc(100vh - 110px)' : '50vh')};
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
`
