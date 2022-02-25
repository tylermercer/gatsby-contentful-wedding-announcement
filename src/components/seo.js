import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description = '', lang = 'en', meta = [], title, image }) => {
  const { contentfulWeddingInvite } = useStaticQuery(
    graphql`
      query {
        contentfulWeddingInvite {
          spouse1
          spouse2
          thumbnail {
            resize(height: 100, width: 100, cropFocus: FACES) {
              src
            }
          }
        }
      }
    `
  )

  const { spouse1, spouse2, thumbnail } = contentfulWeddingInvite

  const defaultImage = thumbnail.resize.src

  const defaultTitle = `${spouse1} and ${spouse2}'s Wedding Announcement`

  const metaDescription = description || `${spouse1} and ${spouse2} are getting married!`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image || defaultImage,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image || defaultImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata?.social?.twitter || ``,
        // },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
