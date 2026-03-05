import { useTranslation } from 'react-i18next'
import styles from './TasksSection.module.scss'
import appScreenshot from '../../assets/app-screenshot.png'

export default function TasksSection() {
  const { t } = useTranslation()
  const tasks = t('tasks.items', { returnObjects: true })

  return (
    <section className={styles.tasks} id="tasks">
      <div className={styles.tasks__inner}>
        <div className={styles.tasks__visual}>
          <img src={appScreenshot} alt={t('tasks.imgAlt')} />
        </div>

        <div className={styles.tasks__content}>
          <span className="section-label">{t('tasks.label')}</span>
          <h2 className="section-title">
            {t('tasks.titlePre')}<br /><span>{t('tasks.titleHighlight')}</span>
          </h2>

          <div className={styles['task-list']}>
            {tasks.map((task) => (
              <div key={task.title} className={styles['task-item']}>
                <span className={styles['task-title']}>{task.title}</span>
                <span className={styles['task-desc']}>{task.desc}</span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 24, fontSize: '0.88rem', color: '#a8b8cc', lineHeight: 1.75 }}>
            {t('tasks.body')}
          </p>
        </div>
      </div>
    </section>
  )
}
