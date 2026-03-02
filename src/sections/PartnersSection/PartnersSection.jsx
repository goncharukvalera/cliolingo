import SchoolIcon from '@mui/icons-material/School'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
import styles from './PartnersSection.module.scss'

const partners = [
  {
    icon: <SchoolIcon />,
    title: 'Educational Institutions',
    desc: 'Integrating ClioLingo to enhance curriculum efficiency and teacher-student synchronization. Provide your students with a modern, data-driven learning tool that adapts to each individual.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Investors',
    desc: 'Scaling a platform that solves the common "drop-out" problem in digital learning through human accountability and data transparency. Join a rapidly growing EdTech sector with proven demand.',
  },
  {
    icon: <PlayCircleOutlineIcon />,
    title: 'Digital Content Creators & Educators',
    desc: 'Providing your audience with a premium, results-oriented tool that complements your educational content and adds measurable value to your community.',
  },
]

export default function PartnersSection() {
  return (
    <section className={styles.partners} id="partners">
      <div className={styles.partners__inner}>
        <div className={styles.partners__header}>
          <span className="section-label">Partnership Opportunities</span>
          <h2 className="section-title">
            Grow Together with <span>ClioLingo</span>
          </h2>
        </div>

        <p className={styles.partners__intro}>
          We are currently seeking strategic partners who are interested in the rapidly growing EdTech sector
          and are looking for innovative tools to attract and engage a high-value audience.
          We see significant potential for:
        </p>

        <div className={styles.partners__grid}>
          {partners.map((p) => (
            <div key={p.title} className={styles.partners__card}>
              <div className={styles['partner-icon']}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.partners__contact}>
          <p>
            Interested in partnering with ClioLingo? Reach out to our team and let's build the future
            of language learning together.
          </p>
          <Button
            id="partners-contact-btn"
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            href="mailto:sales@e-planet.biz"
            sx={{
              px: 3,
              py: 1.2,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              backgroundImage: 'linear-gradient(135deg, #4da9e8, #2a7fba)',
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
