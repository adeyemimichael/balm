import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: 'Computing & Technology', href: '#services' },
      { name: 'Media & Communication', href: '#services' },
      { name: 'Tech & Global Market', href: '#services' },
      { name: 'Educational Technology', href: '#services' },
      { name: 'Soft Skills Development', href: '#services' },
      { name: 'Career Readiness', href: '#services' }
    ],
    institution: [
      { name: 'About Balm City', href: '#about' },
      { name: 'Success Stories', href: '#portfolio' },
      { name: 'Alumni Network', href: '#testimonials' },
      { name: 'Admissions', href: '#contact' },
      { name: 'Campus Life', href: '#' },
      { name: 'Faculty', href: '#' }
    ],
    resources: [
      { name: 'Learning Platform', href: '#' },
      { name: 'Student Portal', href: '#' },
      { name: 'Career Services', href: '#' },
      { name: 'Industry Partnerships', href: '#' },
      { name: 'Scholarships', href: '#' },
      { name: 'Support Center', href: '#' }
    ]
  };

  return (
    <footer className="bg-dark-green text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <img 
                  src="/Balm City Trademark.png" 
                  alt="Balm City Trademark Logo" 
                  className="h-12 w-auto"
                />
                {/* <span className="text-2xl font-adomania font-semibold">
                  Balmcity
                </span> */}
              </Link>
              
              <p className="text-stone leading-relaxed">
                Empowering future tech leaders through innovative education that bridges 
                technical excellence with human connection for global impact.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', icon: 'L' },
                  { name: 'Twitter', icon: 'T' },
                  { name: 'YouTube', icon: 'Y' },
                  { name: 'Instagram', icon: 'I' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-bangladesh-green hover:bg-mountain-meadow rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <span className="text-stone group-hover:text-white font-medium">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Programs</h3>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-stone hover:text-caribbean-green transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institution */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Institution</h3>
              <ul className="space-y-3">
                {footerLinks.institution.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-stone hover:text-caribbean-green transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-stone hover:text-caribbean-green transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-bangladesh-green">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-semibold text-xl mb-2">
                Stay Connected
              </h3>
              <p className="text-stone">
                Get program updates, industry insights, and career opportunities delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-neutral-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-neutral-400 text-sm">
              <p>&copy; {currentYear} Balm City. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="text-neutral-400 text-sm">
              Empowering Future Leaders ✨
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;