import styles from './StatsSection.module.scss'
import statsScreenshot from '../../assets/stats-screenshot.jpg'

const bullets = [
  'Daily learning streaks and time investment',
  'Completed tasks by category',
  'Error analysis and identification of weaknesses',
  'Progress in each language area (vocabulary, grammar, listening comprehension, pronunciation)',
  'Comparison with your own past performance',
]

export default function StatsSection() {
  return (
    <section className={styles['stats-section']} id="stats">
      <div className={styles['stats-section__inner']}>
        <div className={styles['stats-section__content']}>
          <span className="section-label">Progress Tracking</span>
          <h2 className="section-title">
            Your Personal Learning Statistics:<br />
            <span>Transparency Creates Motivation</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            Comprehensive Analysis of Your Progress
          </p>
          <p style={{ marginTop: 12, fontSize: '0.95rem', color: '#a8b8cc', lineHeight: 1.75 }}>
            ClioLingo documents every step of your learning journey. The detailed statistics show you
            not only how many hours you've invested, but also where your strengths lie and which areas
            still need attention.
          </p>

          <ul className={styles['bullet-list']}>
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <p className={styles.summary}>
            This transparent representation of your successes motivates you to keep going and gives
            you control over your learning process.
          </p>
        </div>

        <div className={styles['stats-section__visual']}>
          <img src={statsScreenshot} alt="ClioLingo statistics screen" />
        </div>
      </div>
    </section>
  )
}
