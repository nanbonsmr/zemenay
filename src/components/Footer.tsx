import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-gray-400" />
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Zemenay_Tech_Solutions
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-gray-400" />
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Zemenay Tech Solutions
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a 
                  href="mailto:zemenay.tech.solutions@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  zemenay.tech.solutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Zemenay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;