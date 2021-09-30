import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


import styled from 'styled-components'

// image
import background from "../images/background-1.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Background>
      <img src={background} alt="background"/>
    </Background>
  </Layout>
)

export default IndexPage

const Background = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
