import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    {
      title: "Soil & Hydrology Technologies",
      href: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/",
      hasChildren: true,
      children: [
        { title: "Digital Soil Texture Analyzers", href: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/digital-soil-texture-analyzers/" },
        { title: "Forest Soil Compaction Meters", href: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/forest-soil-compaction-meters/" },
        { title: "Streamflow Monitoring Sensors", href: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/streamflow-monitoring-sensors/" },
        { title: "Soil Respiration Chambers", href: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/soil-respiration-chambers/" },
      ]
    },
    {
      title: "Atmosphere & Emissions Monitoring",
      href: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/",
      hasChildren: true,
      children: [
        { title: "Eddy Covariance Flux Towers", href: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/eddy-covariance-flux-towers/" },
        { title: "High-Precision Particulate Monitors", href: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/high-precision-particulate-monitors/" },
        { title: "Methane & Nitrous Oxide Portable Analyzers", href: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/methane-nitrous-oxide-portable-analyzers/" },
        { title: "Forest Canopy Temperature Infrared Sensors", href: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/forest-canopy-temperature-infrared-sensors/" },
      ]
    },
    {
      title: "Integrated Monitoring & Decision Support",
      href: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/",
      hasChildren: true,
      children: [
        { title: "Forest Health Monitoring Platforms with AI Analysis", href: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/forest-health-monitoring-platforms-with-ai-analysis/" },
        { title: "LiDAR-Based Forest Structure Mapping Systems", href: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/lidar-based-forest-structure-mapping-systems/" },
        { title: "Web-Based Forest Management Dashboards", href: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/web-based-forest-management-dashboards/" },
        { title: "Wireless Sensor Grids for Microclimate Monitoring", href: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/wireless-sensor-grids-for-microclimate-monitoring/" },
      ]
    },
    {
      title: "About Us",
      href: "https://enviroforest.com/about-us/",
      hasChildren: false
    },
    {
      title: "Career",
      href: "https://enviroforest.com/career/",
      hasChildren: true,
      children: [
        { title: "AI-Enhanced Internship Opportunities", href: "https://enviroforest.com/career/ai-enhanced-internship-opportunities/" },
      ]
    }
  ]

  return (
    <header className="ct-header">
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="https://enviroforest.com/wp-content/uploads/2025/10/undefined-31-1.png" 
              alt="Enviro Forest" 
              className="h-10"
            />
            <span className="text-xl font-bold text-gray-800 tracking-tight">
              Enviro Forest
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a href={item.href} className="ct-menu-link">
                  {item.title}
                  {item.hasChildren && (
                    <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M0 2l4 4 4-4z" />
                    </svg>
                  )}
                </a>
                
                {item.hasChildren && (
                  <ul className="sub-menu">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a href={child.href}>{child.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Us Button */}
        <div className="flex items-center gap-6">
          <a href="/contact-us/" className="cta-button hidden lg:inline-flex">
            <span>CONTACT US</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden bg-none border-none cursor-pointer p-1 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 my-1.5 transition-all duration-300 rounded ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 my-1.5 transition-all duration-300 rounded ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 my-1.5 transition-all duration-300 rounded ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 w-full bg-white px-8 py-6 shadow-xl transition-all duration-300 z-40 h-[calc(100vh-80px)] overflow-y-auto ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-6">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100">
                <a 
                  href={item.hasChildren ? '#' : item.href}
                  className="flex items-center justify-between text-gray-700 font-medium text-lg py-4"
                  onClick={(e) => {
                    if (item.hasChildren) {
                      e.preventDefault()
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  }}
                >
                  <span>{item.title}</span>
                  {item.hasChildren && (
                    <i className={`fas fa-chevron-${activeDropdown === index ? 'down' : 'right'} text-gray-400`}></i>
                  )}
                </a>
                
                {item.hasChildren && (
                  <ul className={`pl-4 pb-3 ${activeDropdown === index ? 'block' : 'hidden'}`}>
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a href={child.href} className="text-gray-600 py-2 block">
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
            <li className="pt-6">
              <a href="/contact-us/" className="cta-button inline-flex w-full justify-center">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header