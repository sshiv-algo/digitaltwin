import { Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact', href: 'mailto:hello@dtwinai.vercel.app', icon: Mail },
];

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] rounded-lg font-bold text-white text-xs">
              DT
            </div>
            <span className="font-semibold text-white text-sm">Digital Twin</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1.5 text-sm text-[#A6ADC8] hover:text-white transition-colors"
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-[#A6ADC8]/60">
            Made with ❤️ using React, FastAPI, Node.js and Gemini AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
