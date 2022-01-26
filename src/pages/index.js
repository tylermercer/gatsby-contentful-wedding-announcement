import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    const invite = get(this, 'props.data.contentfulWeddingInvite')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={invite.mainImage.gatsbyImageData}
          title={invite.introText}
          content={invite.addendum.childMarkdownRemark.html}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulWeddingInvite {
      addendum {
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "MMMM Do, yyyy")
      introText
      nameJoiner
      spouse1
      spouse2
      predicate {
        childMarkdownRemark {
          html
        }
      }
      node_locale
      mainImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 424
          height: 212
        )
      }
    }
  }

`
