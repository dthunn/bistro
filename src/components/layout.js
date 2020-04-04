import React from 'react'
import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './layout.scss'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />

      <main id="#home" className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: 'Lato', sans-serif;
  color: #262626;
  ${'' /* background: #fff; */}
}

html {
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
