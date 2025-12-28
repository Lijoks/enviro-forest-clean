const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "https://enviroforest.com/about-us/" },
    { label: "Careers", href: "https://enviroforest.com/career/" },
    { label: "Get In Touch", href: "/contact-us/" }
  ]

  const services = [
    { label: "Forest Soil & Hydrology Assessment", href: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/" },
    { label: "Forest Atmosphere & Emissions Monitoring", href: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/" },
    { label: "Forest Monitoring & Decision Support Systems", href: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/" }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enviro Forest</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              These technologies evaluate forest soil characteristics and water dynamics 
              essential for ecological balance and sustainable forest management.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Location */}
          <div>
            <h4 className="text-xl font-bold mb-6">We Are Located</h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              701 Fifth Avenue, Seattle, WA, 98104, USA
            </p>
            <div className="map-container rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.190126834354!2d-122.33368428436933!3d47.605465279185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab52b6a8c9f%3A0xe8c5b5e5b5e5b5e5!2s701%20Fifth%20Ave%2C%20Seattle%2C%20WA%2098104!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Enviro Forest Location Map"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright &copy; 2024 Enviro Forest | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer