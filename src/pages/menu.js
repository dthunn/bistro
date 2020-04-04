import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderImage from '../components/HeaderImage'
import { Banner } from '../utils/'

const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <HeaderImage img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="menu" subtitle="Let's dig in" />
    </HeaderImage>
  </Layout>
)

export default MenuPage

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "menu.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
