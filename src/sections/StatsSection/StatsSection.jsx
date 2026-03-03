import { useTranslation } from 'react-i18next'
import styles from './StatsSection.module.scss'
import statsScreenshot from '../../assets/stats-screenshot.jpg'

export default function StatsSection() {
  const { t } = useTranslation()
  const bullets = t('stats.bullets', { returnObjects: true })

  return (
    <section className={styles['stats-section']} id="stats">
      <div className={styles['stats-section__inner']}>
        <div className={styles['stats-section__content']}>
          <span className="section-label">{t('stats.label')}</span>
          <h2 className="section-title">
            {t('stats.titlePre')}<br />
            <span>{t('stats.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            {t('stats.subtitle')}
          </p>
          <p style={{ marginTop: 12, fontSize: '0.95rem', color: '#a8b8cc', lineHeight: 1.75 }}>
            {t('stats.body')}
          </p>

          <ul className={styles['bullet-list']}>
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <p className={styles.summary}>{t('stats.summary')}</p>
        </div>

        <div className={styles['stats-section__visual']}>
          <img src={statsScreenshot} alt={t('stats.imgAlt')} />
        </div>
      </div>
    </section>
  )
}
