import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import Logo from '../../assets/Logo.png'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const { i18n } = useTranslation()
    const currentLang = i18n.language === 'de' ? 'DE' : 'EN'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.header__inner}>
                <Link to="/" className={styles.header__logo}>
                    <img src={Logo} alt="Logo"/>
                </Link>

                <div className={styles.header__right}>
                    <div className={styles.header__lang}>
                        <button
                            className={`${styles['lang-btn']} ${currentLang === 'EN' ? styles.active : ''}`}
                            onClick={() => i18n.changeLanguage('en')}
                            id="lang-en"
                        >
                            EN
                        </button>
                        <div className={styles['lang-divider']}/>
                        <button
                            className={`${styles['lang-btn']} ${currentLang === 'DE' ? styles.active : ''}`}
                            onClick={() => i18n.changeLanguage('de')}
                            id="lang-de"
                        >
                            DE
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}