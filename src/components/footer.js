import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by <a href="https://github.com/tylermercer">Tyler Mercer</a> &middot;{' '}
      <a href="https://github.com/tylermercer/gatsby-contentful-wedding-announcement">Source</a>
    </div>
  </Container>
)

export default Footer
