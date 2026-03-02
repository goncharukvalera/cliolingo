import styles from './TasksSection.module.scss'
import appScreenshot from '../../assets/app-screenshot.jpg'

const tasks = [
  { title: 'Interactive Exercises', desc: 'Multiple-choice questions, fill-in-the-blanks, and matching tasks' },
  { title: 'Playful Challenges', desc: 'Gamification elements motivate and make learning an experience' },
  { title: 'Everyday Scenarios', desc: 'Realistic situations prepare you for real conversations' },
  { title: 'Adaptive Tests', desc: 'Regular assessments adapt to your level of knowledge' },
]

export default function TasksSection() {
  return (
    <section className={styles.tasks} id="tasks">
      <div className={styles.tasks__inner}>
        <div className={styles.tasks__visual}>
          <img src={appScreenshot} alt="ClioLingo app showing learning tasks" />
        </div>

        <div className={styles.tasks__content}>
          <span className="section-label">Learning Design</span>
          <h2 className="section-title">
            Intelligent Variety of Tasks for<br /><span>Sustainable Learning Success</span>
          </h2>

          <div className={styles['task-list']}>
            {tasks.map((t) => (
              <div key={t.title} className={styles['task-item']}>
                <span className={styles['task-title']}>{t.title}</span>
                <span className={styles['task-desc']}>{t.desc}</span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 24, fontSize: '0.88rem', color: '#a8b8cc', lineHeight: 1.75 }}>
            Every task has been carefully developed to appeal to different learning styles and cover
            all aspects of the language. This keeps learning varied and helps you achieve your goals faster.
          </p>
        </div>
      </div>
    </section>
  )
}
