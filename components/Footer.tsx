import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Facebook", icon: "👥", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
  ];

  const footerLinks = {
    "Quick Links": [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Memberships", href: "/memberships" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Shop", href: "/shop" },
    ],
    "Contact": [
      { label: "Email: info@vectorgym.com", href: "mailto:info@vectorgym.com" },
      { label: "Phone: +1 (555) 123-4567", href: "tel:+15551234567" },
      { label: "Address: 123 Fitness St", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark-light border-t border-dark-lighter">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black text-gradient">VECTOR</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </Link>
            <p className="text-gray-400 text-sm">
              Train Hard. Stay Strong. Be Vector.
            </p>
            <p className="text-gray-500 text-xs">
              Premium fitness facility dedicated to your transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks["Quick Links"].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks["Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-dark-lighter rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-lighter pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Vector Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


