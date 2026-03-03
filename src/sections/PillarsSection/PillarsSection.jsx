import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import SchoolIcon from '@mui/icons-material/School'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import { useTranslation } from 'react-i18next'
import styles from './PillarsSection.module.scss'

const icons = [<LibraryBooksIcon />, <SchoolIcon />, <HeadphonesIcon />, <RecordVoiceOverIcon />]

export default function PillarsSection() {
  const { t } = useTranslation()
  const items = t('pillars.items', { returnObjects: true })

  return (
    <section className={styles.pillars} id="pillars">
      <div className={styles.pillars__inner}>
        <div className={styles.pillars__header}>
          <span className="section-label">{t('pillars.label')}</span>
          <h2 className="section-title">
            {t('pillars.titlePre')}<br /><span>{t('pillars.titleHighlight')}</span>
          </h2>
        </div>

        <div className={styles.pillars__grid}>
          {items.map((p, i) => (
            <div key={p.title} className={styles.pillars__card}>
              <div className={styles['pillar-icon']}>{icons[i]}</div>
              <div className={styles['pillar-content']}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
