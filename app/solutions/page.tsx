'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'agent-factory',
      title: 'Agent Factory Platform',
      icon: '🏭',
      description: 'Our proprietary infrastructure for rapidly building industry-specific AI agents. Built for speed, flexibility, and scale.',
      features: [
        'Modular agent architecture',
        'Industry-specific knowledge bases',
        'Seamless system integration',
        'Production-ready deployment'
      ]
    },
    {
      id: 'cross-sell',
      title: 'Cross-Sell Automation',
      icon: '💰',
      description: 'AI agents that identify opportunities and engage customers automatically. Built for insurance, financial services, and complex B2B.',
      features: [
        'Intelligent opportunity scoring',
        'Personalized outreach',
        'Multi-channel engagement',
        'ROI tracking & analytics'
      ]
    },
    {
      id: 'back-office',
      title: 'Back-Office Automation',
      icon: '⚙️',
      description: 'Eliminate manual processes. AI agents that handle document processing, data entry, compliance checks, and more.',
      features: [
        'Document processing & extraction',
        'Automated compliance checking',
        'Data validation & enrichment',
        'Workflow orchestration'
      ]
    },
    {
      id: 'integration',
      title: 'Integration Services',
      icon: '🔗',
      description: 'Connect AI agents to your existing systems. APIs, databases, CRMs, ERPs—we integrate with everything.',
      features: [
        'Custom API development',
        'Legacy system integration',
        'Real-time data sync',
        'Security & compliance'
      ]
    }
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <Container size="lg">
          <AnimatedSection>
            <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 text-center leading-tight mb-8">
              Solutions That Actually Work
            </h1>

            <p className="text-2xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Purpose-built AI agents for your specific industry and workflow. Not generic tools repurposed for your business.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="xl">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.id} delay={index * 0.1}>
                <div id={solution.id} className="scroll-mt-32">
                  <Card variant="feature" padding="lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                      <div className="lg:col-span-1">
                        <div className="text-6xl mb-6">{solution.icon}</div>
                        <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                          {solution.title}
                        </h2>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
                        <ul className="space-y-2 mb-8">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                              <span className="text-[#FF6B35] mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button asChild variant="secondary">
                          <Link href="/contact">Learn More</Link>
                        </Button>
                      </div>

                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-gray-50">
        <Container size="md">
          <AnimatedSection>
            <h2 className="font-serif text-5xl font-semibold text-gray-900 text-center mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Book a workshop and see these solutions in action.
            </p>
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
