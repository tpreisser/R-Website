'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Container size="md">

          <AnimatedSection>
            <h1 className="font-serif text-6xl lg:text-7xl font-semibold text-gray-900 text-center mb-6">
              Let&apos;s Talk
            </h1>

            <p className="text-2xl text-gray-600 text-center mb-16">
              Book a workshop. Ask a question. Start the conversation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-2">
                Prefer email?
              </p>
              <a
                href="mailto:hello@r2solutions.ai"
                className="text-[#025082] hover:text-[#FF6B35] font-medium text-lg transition-colors"
              >
                hello@r2solutions.ai
              </a>
            </div>
          </AnimatedSection>

        </Container>
      </section>

    </div>
  );
}
