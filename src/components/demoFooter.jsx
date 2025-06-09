import { MapPin, Phone, Mail } from 'lucide-react';

const DemoFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-50 to-teal-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center rounded-full font-bold text-xl shadow-lg">
                WW
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">
                We Want Waste
              </span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-xs">
              Professional waste management solutions for your projects, delivering fast and reliable skip hire services.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-600 hover:text-emerald-600 text-sm sm:text-base transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-emerald-600 text-sm sm:text-base transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-emerald-600 text-sm sm:text-base transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-emerald-600 text-sm sm:text-base transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>123 Waste St, Lowestoft, NR32 1AB</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 text-sm sm:text-base">
                <Phone className="w-5 h-5 text-emerald-600" />
                <a href="tel:+441502123456" className="hover:text-emerald-600 transition-colors">
                  +44 1502 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 text-sm sm:text-base">
                <Mail className="w-5 h-5 text-emerald-600" />
                <a href="mailto:info@wewantwaste.co.uk" className="hover:text-emerald-600 transition-colors">
                  info@wewantwaste.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} We Want Waste. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <a href="#privacy" className="hover:text-emerald-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-emerald-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DemoFooter;