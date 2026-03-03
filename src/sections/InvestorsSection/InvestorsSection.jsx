import styles from './InvestorsSection.module.scss'

const opportunities = [
  {
    title: 'Educational Institutions',
    description:
      'Integrating ClioLingo to enhance curriculum efficiency and teacher-student synchronization.',
  },
  {
    title: 'Investors',
    description:
      'Scaling a platform that solves the common "drop-out" problem in digital learning through human accountability and data transparency.',
  },
  {
    title: 'Digital Content Creators & Educators',
    description:
      'Providing your audience with a premium, results-oriented tool that complements your educational content and adds measurable value to your community.',
  },
]

export default function InvestorsSection() {
  return (
    <section className={styles.investors} id="investors">
      <div className={styles.investors__inner}>
        <div className={styles.investors__header}>
          <span className="section-label">Partners & Investors</span>
          <h2 className="section-title">
            Strategic <span>Partnership</span> Opportunities
          </h2>
          <p className="section-subtitle">
            We are currently seeking strategic partners who are interested in the rapidly growing
            EdTech sector and are looking for innovative tools to attract and engage a high-value
            audience. We see significant potential for:
          </p>
        </div>

        <div className={styles.investors__grid}>
          {opportunities.map(({ title, description }) => (
            <div key={title} className={`card ${styles.investors__card}`}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
