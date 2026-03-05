import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import BarChartIcon from '@mui/icons-material/BarChart'
import PsychologyIcon from '@mui/icons-material/Psychology'
import PersonIcon from '@mui/icons-material/Person'
import { useTranslation } from 'react-i18next'
import styles from './BridgeSection.module.scss'
import bridgeScreenshot from '../../assets/bridge-screenshot.png'

const icons = [<FitnessCenterIcon />, <BarChartIcon />, <PsychologyIcon />, <PersonIcon />]

export default function BridgeSection() {
  const { t } = useTranslation()
  const steps = t('bridge.steps', { returnObjects: true })

  return (
    <section className={styles.bridge} id="bridge">
      <div className={styles.bridge__inner}>
        <div className={styles.bridge__content}>
          <span className="section-label">{t('bridge.label')}</span>
          <h2 className="section-title">
            {t('bridge.titlePre')}<br />{t('bridge.titleConj')} <span>{t('bridge.titleHighlight')}</span>
          </h2>

          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.title} className={styles.step}>
                <div className={styles['step-icon']}>{icons[i]}</div>
                <div className={styles['step-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bridge__visual}>
          <img src={bridgeScreenshot} alt={t('bridge.imgAlt')} />
        </div>
      </div>
    </section>
  )
}
