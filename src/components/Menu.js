import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Section, Title, SectionButton } from '../utils'

import Product from './Product'

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      items: allContentfulMenu {
        edges {
          node {
            name
            price
            id
            ingredients
            image {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const products = data.items.edges
  console.log(products)

  return (
    <div>
      <Section>
        <Title title="featured items" message="little taste" />
        <ProductList>
          {products.map(({ node }) => {
            return <Product key={node.id} product={node} />
          })}
        </ProductList>
        <Link to="/menu/" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto' }}> menu</SectionButton>
        </Link>
      </Section>
    </div>
  )
}

export default Menu

export const ProductList = styled.div`
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  max-width: 1170px;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    /* justify-content: center; */
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
