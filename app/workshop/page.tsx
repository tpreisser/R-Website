'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GuaranteeBadge } from '@/components/ui/Badge';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function WorkshopPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <AnimatedSection>
              <div>
                <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-6">
                  The One-Day AI Workshop
                </h1>

                <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                  See working AI agents solving your biggest challenge. By end of day. Guaranteed.
                </p>

                <Button asChild size="xl" variant="primary">
                  <Link href="/contact?subject=workshop">Book Your Workshop</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <GuaranteeBadge size="lg" />
              </div>
            </AnimatedSection>

          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="lg">

          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              How It Works
            </h2>
          </AnimatedSection>

          <div className="space-y-16">

            <AnimatedSection delay={0.1}>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#025082] text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="w-0.5 flex-1 bg-gray-200 mt-4"></div>
                </div>

                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide mb-2">
                    Before (1 Week Prior)
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    Discovery & Preparation
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Pre-workshop discovery call. You share your top challenge (cross-sell, operations, compliance). We design the approach and prepare the infrastructure.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#025082] text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="w-0.5 flex-1 bg-gray-200 mt-4"></div>
                </div>

                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide mb-2">
                    During (Workshop Day)
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    8 Hours of Building
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our team builds working AI agents live. You see the code, the logic, the results in real-time.
                  </p>

                  <div className="space-y-3 pl-6 border-l-2 border-gray-200">
                    <div>
                      <strong className="text-gray-900">Hour 1-2:</strong> Problem definition & data mapping
                    </div>
                    <div>
                      <strong className="text-gray-900">Hour 3-5:</strong> Agent development & integration
                    </div>
                    <div>
                      <strong className="text-gray-900">Hour 6-7:</strong> Testing & refinement
                    </div>
                    <div>
                      <strong className="text-gray-900">Hour 8:</strong> Demo & deployment roadmap
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#025082] text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#FF6B35] uppercase tracking-wide mb-2">
                    After (Next Steps)
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                    Working Prototypes & Roadmap
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You walk away with working prototypes, full code ownership, and complete documentation. Option to continue to production deployment with clear scope of work.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>

        </Container>
      </section>

      {/* The Guarantee Section */}
      <section className="py-24 lg:py-32 bg-[#025082] text-white">
        <Container size="lg">

          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-white text-center mb-8">
              100% Money-Back Guarantee
            </h2>

            <p className="text-2xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed mb-16">
              If you don&apos;t see measurable value by end of day, we refund your full investment. No questions asked. We&apos;ve never had to do it.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-serif text-xl font-semibold mb-3">We&apos;ve Done This Before</h3>
                <p className="text-white/80">We know exactly what works. No guesswork.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-serif text-xl font-semibold mb-3">Extensive Preparation</h3>
                <p className="text-white/80">Day one is pure execution. We prep thoroughly.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-serif text-xl font-semibold mb-3">Reputation Matters</h3>
                <p className="text-white/80">Our reputation matters more than any single engagement.</p>
              </div>
            </AnimatedSection>
          </div>

        </Container>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="xl">

          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              Who Should Attend
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <AnimatedSection delay={0.1}>
              <div className="text-center p-8 rounded-xl bg-gray-50">
                <div className="text-5xl mb-6">💼</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Enterprise CROs
                </h3>
                <p className="text-gray-600">
                  You need to increase wallet share but generic AI hasn&apos;t worked. We build cross-sell engines that actually deliver.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center p-8 rounded-xl bg-gray-50">
                <div className="text-5xl mb-6">⚙️</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Operations Leaders
                </h3>
                <p className="text-gray-600">
                  You&apos;re drowning in manual processes and need automation fast. See it working by end of day.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center p-8 rounded-xl bg-gray-50">
                <div className="text-5xl mb-6">💻</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  CTOs / VPs Engineering
                </h3>
                <p className="text-gray-600">
                  You need AI integration that actually works with your stack. See the architecture and code quality firsthand.
                </p>
              </div>
            </AnimatedSection>
          </div>

        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <Container size="md">

          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-20">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {[
              {
                q: "What if we don't have our data organized?",
                a: "We help you map it in the pre-workshop discovery phase. Data organization is part of the process, not a prerequisite."
              },
              {
                q: "Do we own the code?",
                a: "Yes. 100% ownership of everything built. Full source code, documentation, and deployment instructions."
              },
              {
                q: "What happens after the workshop?",
                a: "You have working agents and can choose to deploy them yourself or continue with us for production deployment. No obligation."
              },
              {
                q: "What if our challenge changes before workshop day?",
                a: "We adapt. The workshop focuses on whatever is your highest-value problem at that moment."
              },
              {
                q: "Is this virtual or in-person?",
                a: "Your choice. We can conduct workshops either way with equal effectiveness."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </Container>
      </section>

    </div>
  );
}
