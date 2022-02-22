import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './invitation.module.css'

const Invitation = ({ imageBg, imageFg, nameJoiner, spouse1, spouse2, predicateHtml, addendumHtml }) => (
  <div className={styles.invitation}>
    <div className={styles.details}>
      <h1 className={styles.title}>{spouse1} {nameJoiner} {spouse2}</h1>
    </div>
    <div className={styles.imageContainer}>
      {imageBg && (
        <GatsbyImage className={styles.imageBg} alt={`${spouse1} ${nameJoiner} ${spouse2}`} image={imageBg} />
      )}
      {imageFg && (
        <GatsbyImage className={styles.imageFg} alt={`${spouse1} ${nameJoiner} ${spouse2}`} image={imageFg} />
      )}
    </div>
    <div className={styles.details} dangerouslySetInnerHTML={{ __html: predicateHtml }}>
    </div>
    <div className={styles.details} dangerouslySetInnerHTML={{ __html: addendumHtml }}>
    </div>
  </div>
)

export default Invitation