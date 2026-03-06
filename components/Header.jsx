'use client'
import { useEffect } from "react"

export default function Header() {
    useEffect(() => {
        const burderBtn = document.querySelector('.header__burger')
        const headerMenu = document.querySelector('.header__nav')
        const body = document.querySelector('body')

        if (!burderBtn || !headerMenu) return

        const toggleMenu = () => {
            burderBtn.classList.toggle('active')
            headerMenu.classList.toggle('active')
            body.classList.toggle('active')
        }

        burderBtn.addEventListener('click', toggleMenu)

        return () => {
        burderBtn.removeEventListener('click', toggleMenu)
        }
    }, [])

    return (
    <header className="header">
        <div className="header__container">
            <a href="#" className="header__logo">Tungatarov</a>

            <nav className="header__nav">
                <a href="#" className="header__link">Home</a>
                <a href="#" className="header__link">Services</a>
                <a href="#" className="header__link">Solutions</a>
                <a href="#" className="header__link">Roadmap</a>
                <a href="#" className="header__link">Whitepaper</a>
            </nav>

            <div className="header__socials">
                <a href="#" className="header__icon">
                    <img src="/images/icons/github.svg" alt="Github" />
                </a>
                <a href="#" className="header__icon">
                    <img src="/images/icons/discord.svg" alt="Discord" />
                </a>
                <a href="#" className="header__icon">
                    <img src="/images/icons/redit.svg" alt="Redit" />
                </a>
                <a href="#" className="header__icon">
                    <img src="/images/icons/twitter.svg" alt="Twitter" />
                </a>
            </div>

            <div className="header__burger">
                <span></span>
            </div>
        </div>
    </header>
    )
}