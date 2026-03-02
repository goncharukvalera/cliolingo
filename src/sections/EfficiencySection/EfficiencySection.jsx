import styles from './EfficiencySection.module.scss'

const cards = [
  {
    title: 'Targeted Preparation',
    desc: 'Your tutor optimally prepares for each lesson by reviewing your current learning statistics. No time is wasted searching for your weaknesses.',
  },
  {
    title: 'Focused Explanations',
    desc: 'Instead of repeating general lessons, your teacher concentrates on the grammatical structures and topics where you made specific mistakes. This saves time and significantly accelerates your progress.',
  },
  {
    title: 'Additional Theory as Needed',
    desc: 'Do the statistics show gaps in understanding in certain grammatical topics? Your tutor supplements the app content with detailed explanations and ensures you truly grasp the concepts.',
  },
  {
    title: 'Continuous Adaptation',
    desc: 'The lessons evolve with you. What was a challenge today becomes a strength tomorrow – and your tutor adjusts the focus accordingly.',
  },
]

export default function EfficiencySection() {
  return (
    <section className={styles.efficiency} id="how-it-works">
      <div className={styles.efficiency__inner}>
        <div className={styles.efficiency__header}>
          <span className="section-label">Data-Driven Learning</span>
          <h2 className="section-title">
            Maximum Efficiency Through<br /><span>Data-Driven Tutor Support</span>
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
