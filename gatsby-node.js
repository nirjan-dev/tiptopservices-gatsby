exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allSanityService {
        nodes {
          service_type
          id
          slug {
            current
          }
        }
      }
    }
  `)
  data.allSanityService.nodes.forEach(node => {
    let slug
    if (node.service_type === "Pest Control") {
      slug = "pestcontrol/services/"
    } else {
      slug = "cleaners/services/"
    }
    slug = slug + node.slug.current

    actions.createPage({
      path: slug,
      component: require.resolve(`./src/layouts/service.tsx`),
      context: { id: node.id },
    })
  })
}
