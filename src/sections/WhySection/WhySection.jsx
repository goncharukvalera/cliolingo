import { useTranslation } from 'react-i18next'
import styles from './WhySection.module.scss'

export default function WhySection() {
  const { t } = useTranslation()

  return (
    <section className={styles.why} id="features">
      <div className={styles.why__inner}>
        <div className={styles.why__header}>
          <span className="section-label">{t('why.label')}</span>
          <h2 className="section-title">
            {t('why.titleLine1')}<br />{t('why.titleConj')} <span>{t('why.titleHighlight')}</span>
          </h2>
        </div>

        <div className={styles.why__grid}>
          <div className={styles.why__card}>
            <h3>{t('why.card1Title')}</h3>
            <p>{t('why.card1Text')}</p>
          </div>
          <div className={styles.why__card}>
            <h3>{t('why.card2Title')}</h3>
            <p>{t('why.card2Text')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
