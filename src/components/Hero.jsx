const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Leading Experts in <br />
            <span className="animated-gradient-text">Sustainable Land Development</span> <br />
            & Reforestation
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed font-light max-w-3xl mx-auto">
            Enviro Forest delivers eco-friendly land solutions, forest restoration services, 
            and environmental planning to support biodiversity and climate resilience.
          </p>
          <a href="/contact-us/" className="cta-button">
            <span>Start Your Green Journey Today</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero