import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => {
  const { contentfulWeddingInvite } = useStaticQuery(
    graphql`
      query {
        contentfulWeddingInvite {
          nameJoiner
          spouse1
          spouse2
        }
      }
    `
  )

  const { nameJoiner, spouse1, spouse2 } = contentfulWeddingInvite

  const title = `${spouse1} ${nameJoiner} ${spouse2}`

  return <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.navigationItem}>{title}</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
    </ul>
  </nav>
}

export default Navigation
