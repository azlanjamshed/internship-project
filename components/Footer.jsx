// import React from "react";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-white">
//       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Company */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-bold">WebAgency</h3>
//             <p className="text-sm leading-relaxed text-white/80">
//               Creating stunning digital experiences for forward-thinking
//               businesses.
//             </p>

//             <div className="flex items-center gap-3">
//               <a
//                 href="#"
//                 aria-label="Twitter"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 hover:bg-white/10 transition-colors"
//               >
//                 {/* Twitter SVG */}
//                 <svg
//                   className="h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden
//                 >
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 hover:bg-white/10 transition-colors"
//               >
//                 {/* LinkedIn SVG */}
//                 <svg
//                   className="h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden
//                 >
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>

//               <a
//                 href="#"
//                 aria-label="GitHub"
//                 className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 hover:bg-white/10 transition-colors"
//               >
//                 {/* GitHub SVG */}
//                 <svg
//                   className="h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden
//                 >
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold">Services</h4>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Web Design
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Development
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   SEO Optimization
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Digital Marketing
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="text-lg font-semibold">Company</h4>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Our Team
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="text-lg font-semibold">Legal</h4>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Cookie Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors"
//                 >
//                   Disclaimer
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-10 border-t border-white/10 pt-6">
//           <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-white/70 md:flex-row md:text-left">
//             <p>© {currentYear} WebAgency. All rights reserved.</p>
//             <p>Made with ♥ by WebAgency Team</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Web Design", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "Mobile Apps", href: "#" },
    { label: "SEO Services", href: "#" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  A
                </span>
              </div>
              <span className="font-semibold text-lg text-foreground">
                Agency
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating exceptional digital experiences for businesses worldwide.
              Transform your vision into reality with our expert team.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Business St, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@agency.com">hello@agency.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
