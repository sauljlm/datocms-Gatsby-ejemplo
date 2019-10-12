const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        presentadores: allDatoCmsPresentador {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {
      result.data.presentadores.edges.map(({ node: presentador }, i) => {
        createPage({
          path: `presentador/${i}`,
          component: path.resolve(`./src/templates/presentador.js`),
          context: {
            id: presentador.id,
          },
        })
      })
      resolve()
    })
  })
}
