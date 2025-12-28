const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-800 to-green-600">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Interested in learning how our forestry testing solutions can support your mission?
          </h2>
          <p className="text-xl text-green-100 mb-12 leading-relaxed">
            Visit our Contact Us page for more information, expert advice, or tailored support. 
            Let Enviro Forest help you achieve smarter, greener forest management.
          </p>
          <a 
            href="/contact-us/" 
            className="cta-button cta-button-light"
          >
            <span>Connect Now</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaSection