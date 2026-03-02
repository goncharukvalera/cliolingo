import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import BarChartIcon from '@mui/icons-material/BarChart'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PersonIcon from '@mui/icons-material/Person'
import styles from './BridgeSection.module.scss'
import bridgeScreenshot from '../../assets/bridge-screenshot.jpg'

const steps = [
  {
    icon: <FitnessCenterIcon />,
    title: 'You Learn with ClioLingo',
    desc: 'Complete exercises, train your listening comprehension, and perfect your pronunciation at your own pace.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Statistics are Synchronized',
    desc: 'All your activities and results are automatically recorded and clearly presented.',
  },
  {
    icon: <PsychologyIcon />,
    title: 'Tutor Analyzes Your Progress',
    desc: 'Your teacher sees exactly where you are successful and where you need support.',
  },
  {
    icon: <PersonIcon />,
    title: 'Individualized Instruction',
    desc: 'The tutor customizes lessons to your specific needs and focuses on your challenges.',
  },
]

export default function BridgeSection() {
  return (
    <section className={styles.bridge} id="bridge">
      <div className={styles.bridge__inner}>
        <div className={styles.bridge__content}>
          <span className="section-label">Tutor Integration</span>
          <h2 className="section-title">
            The Bridge Between You<br />and <span>Your Tutor</span>
          </h2>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.title} className={styles.step}>
                <div className={styles['step-icon']}>{s.icon}</div>
                <div className={styles['step-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bridge__visual}>
          <img src={bridgeScreenshot} alt="Tutor managing classes in ClioLingo" />
        </div>
      </div>
    </section>
  )
}
