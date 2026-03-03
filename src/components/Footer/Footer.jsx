import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'
import Logo from '../../assets/Logo.png'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__grid}>
                    <div className={styles.footer__brand}>
                        <Link to="/" className={styles.logo}>
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>

                    <div className={styles.footer__col}>
                        <ul>
                            <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footer__col}>
                        <ul>
                            <li>
                                <span>{t('footer.contactLabel')}</span>
                                <a href="mailto:sales@e-planet.biz">sales@e-planet.biz</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer>
    )
}