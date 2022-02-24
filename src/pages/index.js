import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Invitation from '../components/invitation/invitation'

class RootIndex extends React.Component {
  render() {
    const invite = get(this, 'props.data.contentfulWeddingInvite')

    return (
      <Layout location={this.props.location}>
        <Invitation
          imageFg={invite.mainImage.gatsbyImageData}
          imageBg={invite.mainImageBackground.gatsbyImageData}
          introText={invite.introText}
          nameJoiner={invite.nameJoiner}
          spouse1={invite.spouse1}
          spouse2={invite.spouse2}
          date={invite.date}
          predicateHtml={invite.predicate.childMarkdownRemark.html}
          addendumHtml={invite.addendum.childMarkdownRemark.html}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulWeddingInvite {
      nameJoiner
      spouse1
      spouse2
      predicate {
        childMarkdownRemark {
          html
        }
      }
      addendum {
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
          height: 260
        )
      }
      mainImageBackground {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 424
          height: 260
        )
      }
    }
  }

`
