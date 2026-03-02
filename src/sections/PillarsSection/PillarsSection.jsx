import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import SchoolIcon from '@mui/icons-material/School'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import styles from './PillarsSection.module.scss'

const pillars = [
  {
    icon: <LibraryBooksIcon />,
    title: 'Build Vocabulary',
    desc: 'Learn new vocabulary with innovative methods: flashcards, image association, and context-based exercises help you not just to learn words, but to truly internalize them.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Master Grammar',
    desc: 'Understand the structures of the German language through interactive exercises and clear explanations. From simple sentences to complex constructions – step by step.',
  },
  {
    icon: <HeadphonesIcon />,
    title: 'Train Listening Comprehension',
    desc: 'Train your ear for the German language with authentic dialogues, podcasts, and audio texts in various difficulty levels and accents.',
  },
  {
    icon: <RecordVoiceOverIcon />,
    title: 'Perfect Pronunciation',
    desc: 'Use state-of-the-art speech recognition technology to improve your pronunciation. Receive immediate feedback and practice until you sound like a native speaker.',
  },
]

export default function PillarsSection() {
  return (
    <section className={styles.pillars} id="pillars">
      <div className={styles.pillars__inner}>
        <div className={styles.pillars__header}>
          <span className="section-label">Core Features</span>
          <h2 className="section-title">
            Four Pillars of Successful<br /><span>Language Acquisition</span>
          </h2>
        </div>

        <div className={styles.pillars__grid}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.pillars__card}>
              <div className={styles['pillar-icon']}>{p.icon}</div>
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
