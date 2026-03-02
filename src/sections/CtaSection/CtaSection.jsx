import Button from '@mui/material/Button'
import styles from './CtaSection.module.scss'

const bullets = [
  'Learn at your own pace, whenever and wherever you want',
  'Benefit from data-driven tutor support',
  'Track your progress in real-time',
  'Improve all four language skills simultaneously',
]

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.cta__inner}>
        <div className={styles.cta__badge}>Start Today</div>

        <h2>
          Ready for Your <span>German Adventure?</span>
        </h2>

        <p className={styles.cta__sub}>Start Today!</p>

        <p>
          ClioLingo combines the best of two worlds: the flexibility of digital learning with the
          personal guidance of experienced tutors. Whether you need German for business, are learning
          for a degree, or simply want to discover a new language – we accompany you every step of the way.
        </p>

        <ul className={styles.cta__bullets}>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>

        <p>
          <strong style={{ color: '#e8edf5' }}>Download ClioLingo now</strong> and start your journey to the German language!
        </p>

        <div className={styles.cta__actions}>
          <Button
            id="cta-app-store-btn"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              backgroundImage: 'linear-gradient(135deg, #4da9e8, #2a7fba)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #7bc4f0, #4da9e8)',
              },
            }}
          >
            App Store
          </Button>
          <Button
            id="cta-google-play-btn"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderColor: 'rgba(77,169,232,0.5)',
              '&:hover': { borderColor: '#4da9e8', background: 'rgba(77,169,232,0.08)' },
            }}
          >
            Google Play
          </Button>
        </div>

        <p className={styles.cta__note}>Free to download · No credit card required</p>
      </div>
    </section>
  )
}
