import styles from './AppFeaturesSection.module.scss'
import featuresScreenshot from '../../assets/Grammar-Exercise.jpg'
import bridgeScreenshot from '../../assets/Listening-Exercise.jpg'
import appScreenshot from '../../assets/Practice-Vocabulary.jpg'

const features = [
  {
    img: appScreenshot,
    title: 'Grammar Exercise',
    desc: 'Master German grammar with interactive exercises. Learn sentence structures, verb conjugations, and grammatical rules through engaging tasks that adapt to your level.',
  },
  {
    img: featuresScreenshot,
    title: 'Listening Exercise',
    desc: 'Train your ear with authentic German dialogues, podcasts, and audio texts. Improve your listening comprehension with content at various difficulty levels and different accents.',
  },
  {
    img: bridgeScreenshot,
    title: 'Practice Vocabulary',
    desc: 'Build your German vocabulary with innovative learning methods. Use flashcards, image associations, and context-based exercises to internalize new words effectively.',
  },
]

export default function AppFeaturesSection() {
  return (
    <section className={styles['app-features']} id="app-features">
      <div className={styles['app-features__inner']}>
        <div className={styles['app-features__header']}>
          <span className="section-label">Inside the App</span>
          <h2 className="section-title">
            <span>App Features</span>
          </h2>
        </div>

        <div className={styles['app-features__grid']}>
          {features.map((f) => (
            <div key={f.title} className={styles['app-features__card']}>
              <img src={f.img} alt={f.title} className={styles['screen-img']} />
              <div className={styles['feature-title']}>{f.title}</div>
              <div className={styles['feature-desc']}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}