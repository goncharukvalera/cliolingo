import styles from './AboutPage.module.scss'
import EmailIcon from '@mui/icons-material/Email'
import Button from '@mui/material/Button'

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <div className={styles.about__hero}>
        <div className={styles.about__hero_inner}>
          <span className="section-label">About Us</span>
          <h1 className="section-title">
            12 Years of Cloud Excellence in <span>Digital Education</span>
          </h1>
          <p className="section-subtitle">
            We have 12-year experience in creating cloud solutions for digital education,
            with a primary focus on language learning.
          </p>
        </div>
      </div>

      <div className={styles.about__body}>
        <div className={styles.about__grid}>
          <div className={styles.about__card}>
            <div className={styles['card-num']}>12+</div>
            <div className={styles['card-label']}>Years of Experience</div>
            <p>
              Over a decade of building and refining cloud-based educational platforms,
              serving learners across the globe.
            </p>
          </div>
          <div className={styles.about__card}>
            <div className={styles['card-num']}>🌐</div>
            <div className={styles['card-label']}>Cross-Platform</div>
            <p>
              We always follow modern tendencies and prefer cross-platform, universal, and flexible solutions
              that work seamlessly on any device.
            </p>
          </div>
          <div className={styles.about__card}>
            <div className={styles['card-num']}>🎯</div>
            <div className={styles['card-label']}>Language Learning Focus</div>
            <p>
              Language learning is our primary domain. ClioLingo is the latest evolution of our expertise,
              built with proven EdTech methodologies.
            </p>
          </div>
        </div>

        <div className={styles.about__text}>
          <h2>Our Mission</h2>
          <p>
            We are always trying to follow modern tendencies and prefer cross-platform universal and
            flexible solutions. ClioLingo represents the intersection of AI-driven learning, personal
            tutoring, and transparent progress analytics – creating the most effective path to German
            language mastery.
          </p>

          <h2>Contact Us</h2>
          <p>
            Whether you are a learner, a potential partner, or an investor, we'd love to hear from you.
            Reach out to our team at:
          </p>
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
