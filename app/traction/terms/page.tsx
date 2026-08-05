import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Traction Health — Terms of Service',
  description: 'Terms of Service and End User License Agreement for the Traction Health mobile app.',
}

export default function TractionTerms() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="pt-6 md:pt-10 pb-16">
        <div className="container max-w-3xl">
          <h1 className="text-[34px] md:text-[44px] font-semibold tracking-[-0.04em] leading-[1.05] mb-2 text-ink">Traction Health — Terms of Service &amp; EULA</h1>
          <p className="text-base text-ink/60 mb-8"><strong className="text-ink">Last Updated</strong>: June 2, 2026</p>

          <p className="text-base text-ink/60 mb-4 leading-[1.65]">
            These Terms of Service and End User License Agreement (the &quot;Terms&quot;) govern your use of the Traction Health mobile application (the &quot;App&quot;), operated by <strong className="text-ink">Softmax Ltd</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, or using the App, you agree to be bound by these Terms and by our <Link href="/traction/privacy" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">Privacy Policy</Link>. If you do not agree, do not use the App.
          </p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">1. License</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes, in accordance with these Terms and with the usage rules of the app store from which you obtained the App. You may not copy, modify, reverse-engineer, distribute, sell, or lease any part of the App except as permitted by law.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">2. Eligibility and Accounts</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You must be at least 13 years old to use the App and to use any community features. You are responsible for the activity under your account and for keeping your credentials secure. Community features (shared habits, partnerships, groups, comments, nudges, reactions, and connections) require a registered account with a claimed username and are not available to anonymous accounts.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">3. User-Generated Content</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">The App lets you create and share content with other users, including your username, shared habit data, comments, nudge messages, mentions, and emoji reactions (&quot;User Content&quot;). You retain ownership of your User Content. You grant us a worldwide, non-exclusive, royalty-free license to host, store, reproduce, and display your User Content solely to operate and provide the App&apos;s features to you and the users you share with. You are solely responsible for your User Content and represent that you have the rights to share it and that it does not violate these Terms or any law.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">4. Objectionable Content and Abusive Behavior — Zero Tolerance</h2>
          <p className="text-base mb-4 leading-[1.65] font-medium text-ink">There is zero tolerance for objectionable content or abusive behavior.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You agree that you will not create, upload, post, send, or share any User Content, and will not engage in any conduct, that:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>is unlawful, harmful, threatening, abusive, harassing, defamatory, or hateful;</li>
            <li>is obscene, pornographic, sexually explicit, or otherwise objectionable;</li>
            <li>bullies, intimidates, impersonates, or targets any individual or group;</li>
            <li>promotes self-harm, violence, or illegal activity;</li>
            <li>infringes the intellectual property, privacy, or other rights of others;</li>
            <li>contains spam, scams, malware, or unsolicited promotional content; or</li>
            <li>collects or discloses another person&apos;s private information without consent.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Choosing a username that is offensive, impersonating, or otherwise objectionable is prohibited.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">5. Reporting, Blocking, and Moderation</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We provide tools to keep the community safe, and we act on violations:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Report:</strong> you can report objectionable content or abusive users from within the App.</li>
            <li><strong className="text-ink">Block:</strong> you can block other users to prevent them from interacting with you.</li>
            <li><strong className="text-ink">Our response:</strong> we review reports of objectionable content and abusive behavior and will remove offending content and may suspend or terminate the responsible user&apos;s access within 24 hours of receiving a report. You may also contact us at <a href="mailto:support@softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">support@softmaxco.io</a>.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We may, but are not obligated to, monitor or filter User Content, and we may remove any content or terminate any account at our discretion for violating these Terms.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">6. Prohibited Use of the App</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You agree not to misuse the App, including by attempting to access it through unauthorized means, disrupting its operation, circumventing security or moderation controls, or using it to harm, harass, or collect data about other users.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">7. Termination</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You may stop using the App and delete your account at any time from within the App. We may suspend or terminate your access immediately if you violate these Terms. On termination, the license granted to you ends. Provisions that by their nature should survive termination (including content licenses you have granted, disclaimers, and limitations of liability) will survive.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">8. Disclaimers</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including fitness for a particular purpose and non-infringement. The App is a habit and wellness tracking tool and does not provide medical, health, or professional advice. We do not warrant that the App will be uninterrupted, secure, or error-free, and we are not responsible for User Content created by other users.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">9. Limitation of Liability</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, arising out of or relating to your use of the App.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">10. Indemnification</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your User Content, your use of the App, or your violation of these Terms.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">11. Apple App Store and Google Play</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">These Terms are between you and us, not with Apple or Google. Apple and Google are not responsible for the App or its content. Where you obtained the App from the Apple App Store, Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you. You agree to comply with the applicable app store&apos;s terms and usage rules.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">12. Changes to These Terms</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We may update these Terms from time to time. We will post the updated Terms and update the &quot;Last Updated&quot; date. Your continued use of the App after changes take effect constitutes your acceptance of the updated Terms.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">13. Governing Law</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">These Terms are governed by and construed in accordance with the laws of England and Wales, and any disputes arising under or in connection with these Terms are subject to the exclusive jurisdiction of the courts located in London, UK.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">14. Contact</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Questions about these Terms? Contact us at <a href="mailto:support@softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">support@softmaxco.io</a>. Traction Health is operated by Softmax Ltd, 46 Regents Park Road, London NW1 7SX, registered in England and Wales under company number 15897507.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
