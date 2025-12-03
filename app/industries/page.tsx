'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'insurance',
      name: 'Insurance',
      icon: '🏢',
      description: 'AI agents built specifically for insurance operations. Cross-sell, underwriting, claims processing, and compliance.',
      useCases: [
        'Automated cross-sell campaigns',
        'Policy document processing',
        'Claims triage & routing',
        'Compliance monitoring',
        'Customer service automation'
      ],
      results: 'Insurance clients see 40% increase in cross-sell conversion and 60% reduction in manual processing time.'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: '🏥',
      description: 'HIPAA-compliant AI agents for healthcare providers. Patient scheduling, records management, billing, and more.',
      useCases: [
        'Patient intake automation',
        'Medical records processing',
        'Insurance verification',
        'Billing & coding assistance',
        'Appointment scheduling'
      ],
      results: 'Healthcare providers reduce administrative overhead by 50% while maintaining full HIPAA compliance.'
    },
    {
      id: 'financial-services',
      name: 'Financial Services',
      icon: '💰',
      description: 'Secure AI agents for banking and financial services. Loan processing, fraud detection, customer onboarding, and wealth management.',
      useCases: [
        'Loan application processing',
        'KYC/AML compliance',
        'Fraud detection',
        'Portfolio analysis',
        'Customer onboarding'
      ],
      results: 'Financial institutions cut processing time from weeks to days while improving compliance accuracy.'
    },
    {
      id: 'home-services',
      name: 'Home Services',
      icon: '🏠',
      description: 'AI agents for home services businesses. Lead qualification, scheduling, dispatch, and customer communication.',
      useCases: [
        'Lead qualification & routing',
        'Automated scheduling',
        'Service dispatch optimization',
        'Customer follow-up',
        'Review management'
      ],
      results: 'Home service companies increase booking rates by 35% and improve customer satisfaction scores.'
    }
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <Container size="lg">
          <AnimatedSection>
            <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 text-center leading-tight mb-8">
              Industry-Specific AI
            </h1>

            <p className="text-2xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We don&apos;t build generic AI. We build agents that understand your industry, your regulations, and your customers.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-white">
        <Container size="xl">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={index * 0.1}>
                <div id={industry.id} className="scroll-mt-32">
                  <Card variant="feature" padding="lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                      <div className="lg:col-span-1">
                        <div className="text-6xl mb-6">{industry.icon}</div>
                        <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
                          {industry.name}
                        </h2>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {industry.description}
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-4">Common Use Cases:</h3>
                        <ul className="space-y-2 mb-6">
                          {industry.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                              <span className="text-[#FF6B35] mt-1">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-white/50 border-l-4 border-[#025082] p-6 rounded-r-lg mb-6">
                          <p className="text-gray-700 font-medium">
                            {industry.results}
                          </p>
                        </div>

                        <Button asChild variant="secondary">
                          <Link href="/contact">Discuss Your Needs</Link>
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
              See It in Action
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Book a workshop tailored to your industry and challenges.
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
