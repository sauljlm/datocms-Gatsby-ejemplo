import React from 'react'
import { graphql } from 'gatsby'

export default ({data}) => (
  <h1>{data.presentador.nombre}</h1>
)

export const query = graphql`
  query ($id: String!) {
    presentador: datoCmsPresentador(id: {eq:$id}) {
      nombre
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
