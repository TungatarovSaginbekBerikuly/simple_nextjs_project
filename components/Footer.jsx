export default function Footer() {
return (
<footer className="footer fade-in">
    <div className="footer-top">

        <div className="container">
            <div className="footer__inner">
                <div className="footer__info">
                    <a href="#" className="footer__logo">
                        Site Name
                    </a>

                    <p className="footer__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <ul className="footer__menu">
                    <li><a href="#" className="footer__link">Smart Contracts</a></li>
                    <li><a href="#" className="footer__link">Services</a></li>
                    <li><a href="#" className="footer__link">Solutions</a></li>
                    <li><a href="#" className="footer__link">Roadmap</a></li>
                    <li><a href="#" className="footer__link">Whitepaper</a></li>
                </ul>
                <div className="footer__contacts">
                    <p><b>Наши контакты:</b></p>
                    <div className="footer__socials">
                        <a href="#" className="header__icon">
                            <img src="/images/icons/github.svg" alt="GitHub" />
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
                    <p className="footer__txt">+7 (700) 0000</p>
                    <p className="footer__txt">example@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
</footer>
)
}