export default function Hero() {
  return (
    <main className="hero fade-in">
      <div className="hero__container">

        <h1 className="hero__title">
          <span>THE BEST WEBSITE EVER</span>Scalable.
        </h1>

        <p className="hero__description">
          Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security.
          Proof of Stake, its consensus algorithm enables unlimited speeds.
        </p>

        <div className="hero__buttons">
          <button className="hero__btn btn__primary">Get started</button>
          <button className="hero__btn btn__outline">Read more</button>
        </div>

      </div>

      <div className="hero__img">
        <img src="/images/hero/robots.webp" alt="Robots" loading="lazy"/>
      </div>
    </main>
  )
}