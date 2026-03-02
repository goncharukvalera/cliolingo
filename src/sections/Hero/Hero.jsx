import Button from '@mui/material/Button'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import styles from './Hero.module.scss'
import appScreenshot from '../../assets/app-screenshot.jpg'

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.hero__inner}>
                <div className={styles.hero__content}>
                    <div className={styles.badge}>
                        <span className={styles.dot}/>
                        AI-Powered Language Learning
                    </div>

                    <h1>
                        Your Intelligent Companion on the Path to the{' '}
                        <span>German Language</span>
                    </h1>

                    <p>
                        Discover a new dimension of learning German – flexible, effective,
                        and perfectly tailored to your individual needs.
                    </p>

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
                            Explore Features
                        </Button>
                    </div>
                </div>

                <div className={styles.hero__visual}>
                    <div className={styles['phone-wrapper']}>
                        <div className={styles['glow-ring']}/>
                        <img
                            src={appScreenshot}
                            alt="ClioLingo app screenshot"
                            className={styles['phone-frame']}
                        />

                        <div className={`${styles['floating-card']} ${styles['floating-card--vocab']}`}>
                            <div className={styles['card-label']}>Your Vocabulary</div>
                            <div className={styles['card-value']}>
                                <span className={styles.icon}><AutoStoriesIcon sx={{fontSize: 16}}/></span>
                                67 words
                            </div>
                        </div>

                        <div className={`${styles['floating-card']} ${styles['floating-card--streak']}`}>
                            <div className={styles['card-label']}>Day Streak</div>
                            <div className={styles['card-value']}>
                                <span className={styles.accent}><LocalFireDepartmentIcon sx={{fontSize: 16}}/></span>
                                12 days
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}