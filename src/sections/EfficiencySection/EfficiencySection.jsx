import { useTranslation } from 'react-i18next'
import styles from './EfficiencySection.module.scss'

export default function EfficiencySection() {
  const { t } = useTranslation()
  const cards = t('efficiency.cards', { returnObjects: true })

  return (
    <section className={styles.efficiency} id="how-it-works">
      <div className={styles.efficiency__inner}>
        <div className={styles.efficiency__header}>
          <span className="section-label">{t('efficiency.label')}</span>
          <h2 className="section-title">
            {t('efficiency.titlePre')}<br /><span>{t('efficiency.titleHighlight')}</span>
          </h2>
        </div>

        <div className={styles.efficiency__grid}>
          {cards.map((c) => (
            <div key={c.title} className={styles.efficiency__card}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
