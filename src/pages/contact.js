import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderImage from '../components/HeaderImage'
import { Banner } from '../utils/'

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <HeaderImage img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="contact us" subtitle="Lets get in touch" />
    </HeaderImage>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "contact.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
