import styles from './WhySection.module.scss'

export default function WhySection() {
  return (
    <section className={styles.why} id="features">
      <div className={styles.why__inner}>
        <div className={styles.why__header}>
          <span className="section-label">Why ClioLingo</span>
          <h2 className="section-title">
            The Perfect Symbiosis of Technology<br />and <span>Personal Support</span>
          </h2>
        </div>

        <div className={styles.why__grid}>
          <div className={styles.why__card}>
            <h3>Independent Learning</h3>
            <p>
              ClioLingo gives you the freedom to set your own learning pace. Use the app anytime, anywhere –
              whether on the train, during your lunch break, or comfortably at home on the sofa.
              The intuitive user interface makes learning enjoyable, while intelligent algorithms continuously
              analyze your learning progress and optimally adapt content to your level.
            </p>
          </div>
          <div className={styles.why__card}>
            <h3>Learning with Your Tutor</h3>
            <p>
              Combine the flexibility of the app with personal support from an experienced language teacher.
              Your tutor gains insight into your detailed learning statistics and can thus specifically
              address your weaknesses.
              This unique combination of digital innovation and human expertise makes ClioLingo the ideal
              solution for anyone who truly wants to master German.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
