'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GuaranteeBadge } from '@/components/ui/Badge';
import Link from 'next/link';

// Problem Section
export function Problem() {
  const problems = [
    {
      title: "Millions Wasted",
      description: "Spending millions on AI consultants with nothing to show for it.",
      icon: "💸"
    },
    {
      title: "Generic Solutions",
      description: "Off-the-shelf tools that don't understand your business or industry.",
      icon: "🤖"
    },
    {
      title: "Pilot Purgatory",
      description: "Endless pilots and POCs that never make it to production.",
      icon: "⏳"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <Container size="lg">
        <AnimatedSection>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-20">
            Your AI Implementation<br />Is Stuck
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-5xl mb-6">{problem.icon}</div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-2xl text-center text-[#025082] font-medium">
            → There&apos;s a better way.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

// Difference Section
export function Difference() {
  const differentiators = [
    {
      title: "Purpose-Built Agent Factory",
      description: "We create specialized AI agents for your exact use case. Not generic, repackaged ChatGPT. Our Agent Factory infrastructure lets us build industry-specific solutions that integrate seamlessly with your systems."
    },
    {
      title: "Industry Expertise That Matters",
      description: "Deep experience in insurance, healthcare, financial services. We speak your language and understand your regulatory requirements. Our agents are built with industry-specific knowledge baked in."
    },
    {
      title: "Results in Days, Not Years",
      description: "See working prototypes in 48 hours. Production-ready solutions in weeks. We've done this before and we know exactly what works. No more endless pilots that go nowhere."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container size="2xl">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
              The R² Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t do generic AI. Here&apos;s what makes us different.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-24">
          {differentiators.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-square w-full max-w-md mx-auto">
                    <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📊</div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Workshop CTA Section
export function WorkshopCTA() {
  const stats = [
    {
      value: "48 Hours",
      label: "From challenge to working prototype"
    },
    {
      value: "100% Guaranteed",
      label: "Money back if not satisfied"
    },
    {
      value: "Enterprise-Grade",
      label: "Built for scale from day one"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#025082] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container size="lg" className="relative z-10">
        <AnimatedSection>
          <div className="flex justify-center mb-12">
            <GuaranteeBadge size="lg" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-white text-center mb-8">
            The One-Day Workshop
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl lg:text-2xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed mb-16">
            Give us your biggest cross-sell challenge. We&apos;ll build working AI agents by end of day. If you don&apos;t see measurable value, we refund 100%.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex justify-center">
            <Button
              asChild
              size="xl"
              variant="dark"
            >
              <Link href="/workshop">Book Your Workshop</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

// How Different Section
export function HowDifferent() {
  const differentiators = [
    {
      title: "Real Operators",
      description: "We're not just consultants. Builders, engineers, and operators who've done this at scale. We write code, architect systems, and deploy solutions.",
      icon: "🛠️"
    },
    {
      title: "No BS Approach",
      description: "Pragmatic solutions that work today. Not theoretical roadmaps for tomorrow. We focus on measurable outcomes and tangible results.",
      icon: "🎯"
    },
    {
      title: "Transparent Process",
      description: "You see exactly what we build, how it works, and why it delivers ROI. Full code ownership. Complete documentation. No black boxes.",
      icon: "🔍"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {differentiators.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card variant="feature" padding="lg">
                <div className="text-5xl mb-6">
                  {item.icon}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Industries Section
export function Industries() {
  const industries = [
    {
      name: "Insurance",
      icon: "🏢",
      slug: "insurance"
    },
    {
      name: "Healthcare",
      icon: "🏥",
      slug: "healthcare"
    },
    {
      name: "Financial Services",
      icon: "💰",
      slug: "financial-services"
    },
    {
      name: "Home Services",
      icon: "🏠",
      slug: "home-services"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <Container size="xl">
        <AnimatedSection>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-20">
            Industries We Serve
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group block text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-xl bg-white shadow-sm flex items-center justify-center text-5xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  {industry.icon}
                </div>

                <div className="font-medium text-lg text-gray-900 group-hover:text-[#025082] transition-colors">
                  {industry.name}
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Industry-specific agents built for your exact workflow.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/industries">See Solutions by Industry</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

// Final CTA Section
export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <Container size="md">
        <AnimatedSection>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-8">
            Ready to See Real Results?
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Book a workshop. See working AI agents in 48 hours. Guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="primary">
              <Link href="/workshop">Schedule Workshop</Link>
            </Button>

            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
