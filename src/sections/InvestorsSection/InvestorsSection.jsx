import { useTranslation } from 'react-i18next'
import styles from './InvestorsSection.module.scss'

export default function InvestorsSection() {
  const { t } = useTranslation()
  const opportunities = t('investors.opportunities', { returnObjects: true })

  return (
    <section className={styles.investors} id="investors">
      <div className={styles.investors__inner}>
        <div className={styles.investors__header}>
          <span className="section-label">{t('investors.label')}</span>
          <h2 className="section-title">
            {t('investors.titleT1')} <span>{t('investors.titleHighlight')}</span> {t('investors.titleT2')}
          </h2>
          <p className="section-subtitle">{t('investors.subtitle')}</p>
        </div>

        <div className={styles.investors__grid}>
          {opportunities.map(({ title, desc }) => (
            <div key={title} className={`card ${styles.investors__card}`}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
