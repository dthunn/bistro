import React from 'react'
import { graphql } from 'gatsby'

import HeaderImage from '../components/HeaderImage'
import { Banner, BannerButton } from '../utils'
import Layout from '../components/layout'
import SEO from '../components/seo'
import QuickInfo from '../components/QuickInfo'
import Gallery from '../components/Gallery'
import Menu from '../components/Menu'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeaderImage home img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="Bistro" subtitle="123 Main St - Santa Monica, CA">
        <BannerButton style={{ margin: '1.5rem auto' }}>
          <span className="banner">Menu</span>
        </BannerButton>
      </Banner>
    </HeaderImage>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
