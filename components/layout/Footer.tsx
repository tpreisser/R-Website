import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <Container size="2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Column 1: Brand */}
            <div>
              <div className="font-serif text-3xl font-semibold mb-4">
                R²
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Industry-specific AI agents that deliver results in days, not years.
              </p>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/solutions#agent-factory" className="text-gray-400 hover:text-white transition-colors">
                    Agent Factory Platform
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#cross-sell" className="text-gray-400 hover:text-white transition-colors">
                    Cross-Sell Automation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#back-office" className="text-gray-400 hover:text-white transition-colors">
                    Back-Office Automation
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#integration" className="text-gray-400 hover:text-white transition-colors">
                    Integration Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Industries */}
            <div>
              <h3 className="font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/industries#insurance" className="text-gray-400 hover:text-white transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/industries#healthcare" className="text-gray-400 hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/industries#financial" className="text-gray-400 hover:text-white transition-colors">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries#home" className="text-gray-400 hover:text-white transition-colors">
                    Home Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/workshop" className="text-gray-400 hover:text-white transition-colors">
                    Workshop
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container size="2xl">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

            <div>
              © {currentYear} R² Solutions. All rights reserved.
            </div>

            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://linkedin.com/company/r2-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </Container>
      </div>

    </footer>
  );
}
