import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import "@fontsource/parisienne"
import * as styles from './invitation.module.css'

const Invitation = ({ introText,
  imageBg,
  imageFg,
  nameJoiner,
  spouse1,
  spouse2,
  predicateHtml,
  addendumHtml,
  registryInfoHtml
}) => (
  <div className={styles.invitation}>
    {introText &&
      <div className={styles.details}>
        {{introText}}
      </div>
    }
    <div className={styles.details}>
      <h1 className={styles.title}>{spouse1} {nameJoiner} {spouse2}</h1>
    </div>
    <div className={styles.imageContainer}>
      {imageBg && (
        <GatsbyImage className={styles.imageBg}
                     alt={`${spouse1} ${nameJoiner} ${spouse2}`}
                     draggable={false}
                     image={imageBg} />
      )}
      {imageFg && (
        <GatsbyImage className={styles.imageFg}
                     style={{ position: 'absolute' }}
                     alt={`${spouse1} ${nameJoiner} ${spouse2}`}
                     draggable={false}
                     image={imageFg} />
      )}
    </div>
    {predicateHtml &&
      <div className={styles.details} dangerouslySetInnerHTML={{ __html: predicateHtml }}>
      </div>
    }
    {addendumHtml &&
      <div className={styles.details} dangerouslySetInnerHTML={{ __html: addendumHtml }}>
      </div>
    }
    {registryInfoHtml &&
      <div className={styles.details} dangerouslySetInnerHTML={{ __html: registryInfoHtml }}>
      </div>
    }
  </div>
)

export default Invitation