import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Brand Identity', href: '#services' },
      { name: 'Digital Illustrations', href: '#services' },
      { name: 'Web Design', href: '#services' },
      { name: 'Print Design', href: '#services' },
      { name: 'Creative Consulting', href: '#services' },
      { name: 'Motion Graphics', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' }
    ],
    resources: [
      { name: 'Design Process', href: '#' },
      { name: 'Brand Guidelines', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Design Tips', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Support', href: '#' }
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
                A modern graphic design agency specializing in branding, digital illustrations, 
                and creative visuals that bring your vision to life.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: 'I' },
                  { name: 'Dribbble', icon: 'D' },
                  { name: 'Behance', icon: 'B' },
                  { name: 'LinkedIn', icon: 'L' }
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

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
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

            {/* Company */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
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
                Stay Updated
              </h3>
              <p className="text-stone">
                Get design tips, industry insights, and project updates delivered to your inbox.
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
              <p>&copy; {currentYear} Balmcity. All rights reserved.</p>
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
              Made with ❤️ by Balmcity
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;