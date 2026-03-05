import Button from '@mui/material/Button'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { useTranslation } from 'react-i18next'
import styles from './Hero.module.scss'
import appScreenshot from '../../assets/app-screenshot.png'

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.hero__inner}>
                <div className={styles.hero__content}>
                    <div className={styles.badge}>
                        <span className={styles.dot}/>
                        {t('hero.badge')}
                    </div>

                    <h1>
                        {t('hero.titlePre')}{' '}
                        <span>{t('hero.titleHighlight')}</span>
                    </h1>

                    <p>{t('hero.subtitle')}</p>

                    <div className={styles.actions}>
                        <Button
                            id="hero-learn-more-btn"
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{
                                px: 3.5,
                                py: 1.4,
                                fontSize: '1rem',
                                borderColor: 'rgba(77,169,232,0.5)',
                                '&:hover': {borderColor: '#4da9e8', background: 'rgba(77,169,232,0.08)'}
                            }}
                            href="#features"
                        >
                            {t('hero.cta')}
                        </Button>
                    </div>
                </div>

                <div className={styles.hero__visual}>
                    <div className={styles['phone-wrapper']}>
                        <div className={styles['glow-ring']}/>
                        <img
                            src={appScreenshot}
                            alt={t('hero.imgAlt')}
                            className={styles['phone-frame']}
                        />

                        <div className={`${styles['floating-card']} ${styles['floating-card--vocab']}`}>
                            <div className={styles['card-label']}>{t('hero.vocabLabel')}</div>
                            <div className={styles['card-value']}>
                                <span className={styles.icon}><AutoStoriesIcon sx={{fontSize: 16}}/></span>
                                {t('hero.vocabValue')}
                            </div>
                        </div>

                        <div className={`${styles['floating-card']} ${styles['floating-card--streak']}`}>
                            <div className={styles['card-label']}>{t('hero.streakLabel')}</div>
                            <div className={styles['card-value']}>
                                <span className={styles.accent}><LocalFireDepartmentIcon sx={{fontSize: 16}}/></span>
                                {t('hero.streakValue')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}