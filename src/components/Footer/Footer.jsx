import {Link} from 'react-router-dom'
import styles from './Footer.module.scss'
import Logo from '../../assets/Logo.png';

export default function Footer() {
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
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footer__col}>
                        <ul>
                            <li>
                                <a href="mailto:sales@e-planet.biz">Contact Us: sales@e-planet.biz</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p>© {new Date().getFullYear()} ClioLingo · e-planet.biz. All rights reserved.</p>
                    <div className={styles['social-links']}>
                        <a href="mailto:sales@e-planet.biz" title="Email" id="footer-email-link">@</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}