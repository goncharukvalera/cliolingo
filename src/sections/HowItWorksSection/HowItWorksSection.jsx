import styles from './HowItWorksSection.module.scss'

const steps = [
  {
    num: '01',
    title: 'Download the App',
    desc: 'Download ClioLingo for free from the App Store or Google Play Store and create your personal account in just a few minutes.',
  },
  {
    num: '02',
    title: 'Complete a Placement Test',
    desc: 'Our intelligent test determines your current language level so you can start exactly where it makes the most sense for you – no boredom from content too easy, no overwhelm from content too difficult.',
  },
  {
    num: '03',
    title: 'Choose Your Learning Plan',
    desc: 'Decide whether you want to learn independently first or start directly with a tutor. You can switch between both options or combine them at any time.',
  },
  {
    num: '04',
    title: 'Get Started and Celebrate Successes',
    desc: 'Begin your first lesson and experience how motivating effective language learning can be. A little better every day – your successes will inspire you!',
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles['how-it-works']} id="get-started">
      <div className={styles['how-it-works__inner']}>
        <div className={styles['how-it-works__header']}>
          <span className="section-label">Getting Started</span>
          <h2 className="section-title">
            Start Your <span>ClioLingo Journey</span>
          </h2>
        </div>

        <div className={styles['how-it-works__grid']}>
          {steps.map((s) => (
            <div key={s.num} className={styles['how-it-works__step']}>
              <div className={styles['step-num']}>{s.num}</div>
              <div className={styles['step-body']}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
