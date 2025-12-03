'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23025082' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Headline */}
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-semibold text-[#025082] leading-[1.1] tracking-tight mb-6">
              AI Agents That Actually Work
            </h1>

            {/* Subhead */}
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl mb-10">
              Industry-specific automation that delivers results in days, not years.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="primary"
              >
                <Link href="/workshop">Book a Workshop</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link href="#approach">See Our Approach</Link>
              </Button>
            </div>

            {/* Trust signals */}
            <motion.div
              className="mt-12 flex items-center gap-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span>Results in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span>100% Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Abstract Visual */}
          <motion.div
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Abstract R² representation - SVG */}
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-md"
              fill="none"
            >
              {/* Large R² with subtle opacity */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-serif font-light"
                style={{
                  fontSize: '240px',
                  fill: '#025082',
                  opacity: 0.08,
                }}
              >
                R²
              </text>

              {/* Geometric accent lines */}
              <motion.rect
                x="50"
                y="150"
                width="300"
                height="2"
                fill="#025082"
                opacity="0.3"
                initial={{ width: 0 }}
                animate={{ width: 300 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.rect
                x="50"
                y="250"
                width="200"
                height="2"
                fill="#FF6B35"
                opacity="0.5"
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
