import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - 玄印 · Xuan Yin',
  description: 'Read our terms of service to understand the conditions of using our Eastern astrology and consultation services.',
  keywords: 'terms of service, conditions, agreement, consultation services, Eastern astrology',
  openGraph: {
    title: 'Terms of Service - 玄印 · Xuan Yin',
    description: 'Understanding the terms and conditions of our Eastern astrology and consultation services.',
    type: 'website',
  },
}

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Understanding the terms and conditions of our Eastern astrology and consultation services.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-navy-900 mb-6 font-serif">
                  Service Agreement
                </h2>
                
                <p className="text-gray-700 mb-6">
                  By using our services, you agree to these terms and conditions. Please read them carefully before proceeding with any consultation or service.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Service Description
                </h3>
                <p className="text-gray-700 mb-6">
                  We provide Eastern astrology consultations, BaZi readings, relationship compatibility analysis, career guidance, and spiritual counseling services. Our services are based on traditional Eastern wisdom and are intended for guidance and self-reflection purposes.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Important Disclaimers
                </h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Our services are for guidance and entertainment purposes only</li>
                    <li>We do not guarantee specific outcomes or results</li>
                    <li>Our readings should not replace professional medical, legal, or financial advice</li>
                    <li>You are responsible for your own decisions and actions</li>
                    <li>We are not liable for any consequences of following our guidance</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Payment and Refunds
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>All services must be paid in full before consultation</li>
                  <li>We accept major credit cards and secure payment methods</li>
                  <li>30-day money-back guarantee for unsatisfactory services</li>
                  <li>No refunds for completed consultations unless service quality issues</li>
                  <li>Rescheduling requires 24-hour notice</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Client Responsibilities
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Provide accurate birth information for readings</li>
                  <li>Be respectful and professional during consultations</li>
                  <li>Maintain confidentiality of consultation content</li>
                  <li>Use guidance responsibly and at your own discretion</li>
                  <li>Contact us with any concerns or questions</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Our Commitments
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Provide professional and respectful service</li>
                  <li>Maintain complete confidentiality of all consultations</li>
                  <li>Use accurate and traditional Eastern astrology methods</li>
                  <li>Respond to inquiries within 24 hours</li>
                  <li>Continuously improve our knowledge and skills</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Intellectual Property
                </h3>
                <p className="text-gray-700 mb-6">
                  All content, materials, and methods used in our services are protected by intellectual property rights. You may not reproduce, distribute, or use our materials without permission.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Limitation of Liability
                </h3>
                <p className="text-gray-700 mb-6">
                  Our liability is limited to the amount paid for services. We are not liable for any indirect, incidental, or consequential damages arising from our services.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Changes to Terms
                </h3>
                <p className="text-gray-700 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of new terms.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Contact Information
                </h3>
                <div className="bg-cream-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@fatecompass.net<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Wisdom Way, New York, NY 10001
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gold-50 rounded-lg border border-gold-200">
                  <h4 className="text-lg font-bold text-navy-900 mb-2">Last Updated</h4>
                  <p className="text-gray-700">These Terms of Service were last updated on December 20, 2024.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 