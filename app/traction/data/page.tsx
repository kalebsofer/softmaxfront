import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Traction Health — Data Deletion',
  description: 'How to delete your Traction Health account and associated data.',
}

export default function TractionDataDeletion() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="pt-6 md:pt-10 pb-16">
        <div className="container max-w-3xl">
          <h1 className="text-[34px] md:text-[44px] font-semibold tracking-[-0.04em] leading-[1.05] mb-2 text-ink">Traction Health — Data Deletion</h1>
          <p className="text-base text-ink/60 mb-8"><strong className="text-ink">Last Updated</strong>: June 2, 2026</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">How to Delete Your Data</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Traction Health lets you delete your account and all associated data directly from within the app. When you delete your account, we remove your personal information, habits, tasks, completion logs, community data, and all other data linked to your account.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Delete Your Account from the App</h2>
          <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Open the <strong className="text-ink">Traction Health</strong> app.</li>
            <li>Go to <strong className="text-ink">Settings</strong> (tap the gear icon in the bottom tab bar).</li>
            <li>Tap <strong className="text-ink">Account</strong>.</li>
            <li>Tap <strong className="text-ink">Delete Account</strong>.</li>
            <li>Confirm the deletion when prompted.</li>
          </ol>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Your account is deactivated immediately and your Firebase authentication record is removed. After a 14-day grace period, your data is permanently deleted from our systems.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">What Data Is Deleted</h2>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Account information (name, email, profile details, username, avatar, connection code)</li>
            <li>All habits and tasks you created</li>
            <li>Completion logs and streak data</li>
            <li>Community data — connections, shared habits, comments, nudges, reactions, group memberships, blocks, and reports; comments, nudges, and reactions you sent to others are removed from their views</li>
            <li>Push notification tokens and device profiles</li>
            <li>Settings and preferences</li>
            <li>Firebase authentication record (email/password, Google, Apple, or Facebook linked accounts)</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Crash logs and performance data retained by our third-party service providers (Sentry, LogRocket) may persist according to their own retention policies.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Request Deletion via Email</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">If you are unable to delete your account from within the app, you can request deletion by emailing <a href="mailto:support@softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">support@softmaxco.io</a>. Please include the email address associated with your account. We will process your request within 14 days.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Facebook Login Users</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">If you signed in using Facebook Login, you can also manage Traction Health&apos;s access to your data from your <a href="https://www.facebook.com/settings?tab=applications" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors" target="_blank" rel="noopener noreferrer">Facebook App Settings</a>. Removing the app from Facebook revokes its access, but to fully delete your Traction Health account and data, please use the in-app deletion or email us as described above.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Contact Us</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Questions about data deletion or our data practices? Contact us at <a href="mailto:support@softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">support@softmaxco.io</a>. See also our <Link href="/traction/privacy" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">Privacy Policy</Link>. Traction Health is operated by Softmax Ltd, 46 Regents Park Road, London NW1 7SX.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
