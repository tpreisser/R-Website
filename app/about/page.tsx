'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="lg">
          <AnimatedSection>
            <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 text-center leading-tight mb-8">
              Real Operators.<br />Real Results.
            </h1>

            <p className="text-2xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We&apos;re not another AI consulting firm. We&apos;re builders who&apos;ve done this at the highest levels.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="md">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8">
                Why R² Exists
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Born from frustration with generic AI that doesn&apos;t work in the real world. We&apos;ve been at top consulting firms. We&apos;ve seen companies hemorrhage money on AI implementations that go nowhere.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                So we built something different: purpose-built agents for specific industries and functions. An Agent Factory infrastructure that lets us deliver working solutions in days, not years.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                We&apos;re not here to sell you a theoretical roadmap. We&apos;re here to build something that works, hand you the keys, and let the results speak for themselves.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <Container size="xl">

          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              Our Approach
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#025082] text-white flex items-center justify-center text-3xl font-bold">
                  P
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Pragmatic
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We solve real problems with proven technology. No theoretical roadmaps. No smoke and mirrors.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#025082] text-white flex items-center justify-center text-3xl font-bold">
                  I
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Innovative
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cutting-edge AI, applied to your specific reality. Not generic demos repurposed for your industry.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#025082] text-white flex items-center justify-center text-3xl font-bold">
                  T
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Trusted
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Money-back guarantees. Full code ownership. Transparent process. We put our reputation on the line.
                </p>
              </div>
            </AnimatedSection>
          </div>

        </Container>
      </section>

      {/* The Team */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="xl">

          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              The Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            {/* Rich */}
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-6xl text-gray-400">
                  RR
                </div>

                <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-2">
                  Rich Rivara
                </h3>

                <div className="text-lg text-[#025082] font-medium mb-4">
                  Founder & CEO
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Former top-tier consultant turned builder. Spent years watching AI implementations fail. Built R² to deliver the results clients actually need.
                </p>

                <a
                  href="https://linkedin.com/in/richrivara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#025082] hover:text-[#FF6B35] transition-colors"
                >
                  <span>LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <Container size="md">
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-8">
              Ready to Work Together?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="primary">
                <Link href="/workshop">Book Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

    </div>
  );
}
