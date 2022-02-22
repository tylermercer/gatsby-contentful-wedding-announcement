import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './invitation.module.css'

const Invitation = ({ image, introText, nameJoiner, spouse1, spouse2, predicateHtml, date, addendumHtml,  }) => (
  <div className={styles.invitation}>
    <div className={styles.details}>
      <h1 className={styles.title}>{spouse1} {nameJoiner} {spouse2}</h1>
    </div>
    {image && (
      <GatsbyImage className={styles.image} alt={`${spouse1} ${nameJoiner} ${spouse2}`} image={image} />
    )}
    <div className={styles.details} dangerouslySetInnerHtml={predicateHtml}>
    </div>
  </div>
)

export default Invitation