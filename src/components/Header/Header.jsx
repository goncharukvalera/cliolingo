import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import styles from './Header.module.scss'
import Logo from '../../assets/Logo.png'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [lang, setLang] = useState('EN')

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
                            className={`${styles['lang-btn']} ${lang === 'EN' ? styles.active : ''}`}
                            onClick={() => setLang('EN')}
                            id="lang-en"
                        >
                            EN
                        </button>
                        <div className={styles['lang-divider']}/>
                        <button
                            className={`${styles['lang-btn']} ${lang === 'DE' ? styles.active : ''}`}
                            onClick={() => setLang('DE')}
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