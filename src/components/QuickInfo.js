import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Section, Title, SectionButton } from '../utils'
import { styles } from '../utils'

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our story" />
      <QuickInfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          blanditiis dolorum quae doloremque molestias expedita, eum voluptas
          distinctio! Molestiae fuga temporibus nemo non vel mollitia nesciunt
          quaerat facere voluptate earum.
        </p>
        <Link to="/about/" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

export default QuickInfo

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.1rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
