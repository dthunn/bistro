import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderImage from '../components/HeaderImage'
import { Banner } from '../utils/'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeaderImage img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="about us" subtitle="A little about us" />
    </HeaderImage>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "about.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
