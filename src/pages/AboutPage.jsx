import { useTranslation } from 'react-i18next'
import styles from './AboutPage.module.scss'
import EmailIcon from '@mui/icons-material/Email'
import Button from '@mui/material/Button'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.about}>
      <div className={styles.about__hero}>
        <div className={styles.about__hero_inner}>
          <span className="section-label">{t('about.label')}</span>
          <h1 className="section-title">
            {t('about.titlePre')} <span>{t('about.titleHighlight')}</span>
          </h1>
          <p className="section-subtitle">{t('about.intro')}</p>
        </div>
      </div>

      <div className={styles.about__body}>
        <div className={styles.about__grid}>
          <div className={styles.about__card}>
            <div className={styles['card-num']}>{t('about.card1Num')}</div>
            <div className={styles['card-label']}>{t('about.card1Label')}</div>
            <p>{t('about.card1Text')}</p>
          </div>
          <div className={styles.about__card}>
            <div className={styles['card-num']}>🌐</div>
            <div className={styles['card-label']}>{t('about.card2Label')}</div>
            <p>{t('about.card2Text')}</p>
          </div>
          <div className={styles.about__card}>
            <div className={styles['card-num']}>🎯</div>
            <div className={styles['card-label']}>{t('about.card3Label')}</div>
            <p>{t('about.card3Text')}</p>
          </div>
        </div>

        <div className={styles.about__text}>
          <h2>{t('about.missionTitle')}</h2>
          <p>{t('about.missionText')}</p>

          <h2>{t('about.contactTitle')}</h2>
          <p>{t('about.contactText')}</p>
          <div className={styles.about__contact}>
            <Button
              id="about-email-btn"
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              href="mailto:sales@e-planet.biz"
              sx={{
                px: 3,
                py: 1.2,
                backgroundImage: 'linear-gradient(135deg, #4da9e8, #2a7fba)',
              }}
            >
              sales@e-planet.biz
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
