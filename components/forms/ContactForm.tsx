'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    interest: [] as string[],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;ll be in touch within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        />
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
          Industry
        </label>
        <select
          id="industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors"
        >
          <option value="">Select an industry</option>
          <option value="insurance">Insurance</option>
          <option value="healthcare">Healthcare</option>
          <option value="financial">Financial Services</option>
          <option value="home">Home Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Interest Checkboxes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What brings you here?
        </label>
        <div className="space-y-2">
          {[
            { value: 'workshop', label: 'Workshop' },
            { value: 'integration', label: 'Integration Help' },
            { value: 'general', label: 'General Question' }
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.interest.includes(option.value)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      interest: [...formData.interest, option.value]
                    });
                  } else {
                    setFormData({
                      ...formData,
                      interest: formData.interest.filter(i => i !== option.value)
                    });
                  }
                }}
                className="w-4 h-4 text-[#025082] border-gray-300 rounded focus:ring-[#025082]"
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025082] focus:border-transparent transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        variant="primary"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

    </form>
  );
}
