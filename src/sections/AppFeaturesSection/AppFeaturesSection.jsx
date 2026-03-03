import { useTranslation } from 'react-i18next'
import styles from './AppFeaturesSection.module.scss'
import featuresScreenshot from '../../assets/Grammar-Exercise.jpg'
import bridgeScreenshot from '../../assets/Listening-Exercise.jpg'
import appScreenshot from '../../assets/Practice-Vocabulary.jpg'

const imgs = [appScreenshot, featuresScreenshot, bridgeScreenshot]

export default function AppFeaturesSection() {
  const { t } = useTranslation()
  const features = t('appFeatures.features', { returnObjects: true })

  return (
    <section className={styles['app-features']} id="app-features">
      <div className={styles['app-features__inner']}>
        <div className={styles['app-features__header']}>
          <span className="section-label">{t('appFeatures.label')}</span>
          <h2 className="section-title">
            <span>{t('appFeatures.title')}</span>
          </h2>
        </div>

        <div className={styles['app-features__grid']}>
          {features.map((f, i) => (
            <div key={f.title} className={styles['app-features__card']}>
              <img src={imgs[i]} alt={f.title} className={styles['screen-img']} />
              <div className={styles['feature-title']}>{f.title}</div>
              <div className={styles['feature-desc']}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}