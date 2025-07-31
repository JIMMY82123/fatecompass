import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - 玄印 · Xuan Yin',
  description: 'Learn how we protect your privacy and personal information. Your trust and confidentiality are our top priorities.',
  keywords: 'privacy policy, confidentiality, data protection, personal information, trust',
  openGraph: {
    title: 'Privacy Policy - 玄印 · Xuan Yin',
    description: 'Learn how we protect your privacy and personal information.',
    type: 'website',
  },
}

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Your privacy and confidentiality are our highest priorities. Learn how we protect your personal information.
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
                  Your Privacy Matters
                </h2>
                
                <p className="text-gray-700 mb-6">
                  At 玄印 · Xuan Yin, we understand that your personal information is sacred. We are committed to protecting your privacy and ensuring that your trust in us is never compromised.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Information We Collect
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Name and contact information for consultation purposes</li>
                  <li>Birth date, time, and location for astrological readings</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication history and consultation notes</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  How We Use Your Information
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>To provide accurate astrological readings and consultations</li>
                  <li>To communicate with you about your appointments and services</li>
                  <li>To improve our services and provide better guidance</li>
                  <li>To process payments and maintain business records</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Information Security
                </h3>
                <p className="text-gray-700 mb-6">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with regular security updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security audits and monitoring</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Confidentiality Commitment
                </h3>
                <p className="text-gray-700 mb-6">
                  Your consultations and readings are completely confidential. We will never share your personal information, reading results, or consultation details with anyone without your explicit consent, except as required by law.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Your Rights
                </h3>
                <p className="text-gray-700 mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Request corrections to your information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>File a complaint if you believe your privacy has been violated</li>
                </ul>

                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
                  Contact Us
                </h3>
                <p className="text-gray-700 mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-cream-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@fatecompass.net<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> 123 Wisdom Way, New York, NY 10001
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gold-50 rounded-lg border border-gold-200">
                  <h4 className="text-lg font-bold text-navy-900 mb-2">Last Updated</h4>
                  <p className="text-gray-700">This Privacy Policy was last updated on December 20, 2024.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 