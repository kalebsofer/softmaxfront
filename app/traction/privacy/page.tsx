import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Traction Health — Privacy Policy',
  description: 'Privacy Policy for the Traction Health mobile app.',
}

export default function TractionPrivacy() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="pt-6 md:pt-10 pb-16">
        <div className="container max-w-3xl">
          <h1 className="text-[34px] md:text-[44px] font-semibold tracking-[-0.04em] leading-[1.05] mb-2 text-ink">Traction Health — Privacy Policy</h1>
          <p className="text-base text-ink/60 mb-8"><strong className="text-ink">Last Updated</strong>: October 27, 2026</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Introduction</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">
            Traction Health (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Traction Health mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our App.
          </p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">
            By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Information We Collect</h2>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Account Information</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">When you create an account, we collect:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Name</strong> (first and last name)</li>
            <li><strong className="text-ink">Email address</strong></li>
            <li><strong className="text-ink">Phone number</strong> (optional)</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You may also provide optional profile information such as date of birth and an avatar.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You can sign up using email and password, Google Sign-In, or Apple Sign-In. If you use a third-party sign-in method, we receive your name and email address from that provider. We also support anonymous device-based accounts that do not require personal contact information.</p>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Health and Fitness Data</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">The App is a habit and task tracking tool. We collect:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Habit and task names, descriptions, and categories</li>
            <li>Completion logs (date, value, and completion status)</li>
            <li>Streak and completion rate metrics</li>
            <li>Schedule and reminder preferences</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">Apple Health and Health Connect.</strong> You can optionally link a habit to one metric from Apple Health (iOS) or Health Connect (Android), such as steps, distance, active energy, flights climbed, exercise and workout minutes, sleep, mindful minutes, water, caffeine, weight, or wheelchair pushes. When you do, the App reads that metric on your device, reduces it to a single total per day, and uses it to mark the habit complete. Only that daily total for each linked habit is stored with your account so the habit stays in sync across your devices. Raw samples, timestamps, routes, and source devices never leave your device. If you log a linked habit by hand, the App writes that entry back to Apple Health or Health Connect so your records agree. Health data is read only after you grant permission in the system dialog, and we never use it for advertising, analytics, or research, never sell it, never share it with third parties, and never store it in iCloud. If you share a linked habit or add it to a group, its daily progress is visible to those people in the same way as any other habit. You can unlink a habit, disconnect all habits under Settings &gt; Health data, or revoke access in the Apple Health or Health Connect settings at any time; totals already synced stay on the habit until you delete the habit or your account.</p>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">User-Generated Content</h3>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Custom habit and task names, descriptions, and categories</li>
            <li>Feedback and bug report text, including steps to reproduce and expected behavior</li>
            <li>Photos or screenshots submitted with bug reports (up to 5 per report)</li>
          </ul>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Community and Social Data</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Traction Health includes optional community features (shared habits, partnerships, and groups) that let you connect with other people, share your progress, and encourage each other. These features are only available after you create an account with an email address and claim a username; anonymous device-based accounts cannot access community features.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">When you use community features, the following information is created and processed:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Public profile:</strong> your chosen username (display name), your avatar (provided by your sign-in provider), and the date you joined.</li>
            <li><strong className="text-ink">Connection codes and invite links:</strong> a shareable code in the form TRACT-XXXXXX and a corresponding invite link. Anyone you give this code or link to can view a preview of your public profile (username, avatar, join date, and, unless you hide them, your aggregate streak and habit-count statistics) and send you a connection request.</li>
            <li><strong className="text-ink">Shared habit data:</strong> when you share a habit or join a group, the habit&apos;s name, your completion progress, streaks, completion rate, and group leaderboard ranking become visible to the people you have shared with or the members of that group.</li>
            <li><strong className="text-ink">Messages and interactions:</strong> comments, &quot;nudges&quot; (with optional messages), @mentions, and emoji reactions that you send. These are stored and shown to the other participants in the relevant share or group, and may appear in their community activity feed.</li>
            <li><strong className="text-ink">Connections and group membership:</strong> the list of people you are connected to and the groups you belong to.</li>
            <li><strong className="text-ink">Safety actions:</strong> records of users you block and reports you submit about other users.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You control how much you share: you can hide your statistics from the community, change or regenerate your connection code, block other users, report abusive content or behavior, and leave any group or end any share at any time.</p>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Device Information</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We collect certain device information to provide core App functionality:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Device identifier</strong> (a unique ID generated and stored locally on your device)</li>
            <li>Device model, platform (iOS/Android), and operating system version</li>
            <li>App version</li>
          </ul>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Diagnostics and Usage Data</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">To maintain and improve the App, we collect:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Crash data</strong> (crash logs and exception reports via Sentry)</li>
            <li><strong className="text-ink">Performance data</strong> (app launch time, request latency, and error rates)</li>
            <li><strong className="text-ink">Session diagnostics</strong> (interaction and error data via LogRocket for debugging purposes, linked to your account; authentication credentials and community message content are excluded from capture)</li>
            <li><strong className="text-ink">Bug report diagnostics</strong> (device model, OS version, app version, screen size, locale, timezone, and network type, collected only when you submit a bug report)</li>
          </ul>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Push Notification Tokens</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">If you enable push notifications, we collect your Expo push notification token along with your device platform and model to deliver habit and task reminders.</p>

          <h3 id="ad-measurement" className="scroll-mt-24 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Ad Measurement (AppsFlyer)</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We advertise Traction on Google and Apple. To understand which ads bring people who go on to use the App, and what each of those people costs us, we use AppsFlyer, a mobile measurement company. AppsFlyer acts as our processor: it handles this data on our instructions and under a data processing agreement with us.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">When it is on.</strong> If you are in the European Economic Area, the United Kingdom or Switzerland, ad measurement stays off until you allow it. The App asks you once, after you sign in, and nothing is sent to AppsFlyer unless you choose &quot;Allow&quot;. Everywhere else, ad measurement is on by default. Wherever you are, you can turn it off at any time in Settings &gt; Privacy &gt; Ad measurement, and the App works exactly the same with it off. The App works out which applies from your device&apos;s time zone and region settings, and asks you if it cannot tell.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">What AppsFlyer receives while it is on:</strong></p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>a random ID that AppsFlyer creates for this installation of the App, and a random ID we create for it (neither is your name, email or account ID);</li>
            <li>which ad, if any, led to the install: the ad network, campaign and ad group, using the Google Play install referrer on Android and Apple&apos;s AdServices on iOS;</li>
            <li>basic device and app details: device model, operating system and app version, language, and your IP address, from which AppsFlyer works out your country;</li>
            <li>when the App is installed and opened, and when you create a habit, check one in (and whether that was in the App, from the widget or automatically), or join a group.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">What AppsFlyer never receives:</strong> your name, email address, phone number or account ID; the names, categories or details of your habits; any health or fitness readings; anything you share with friends or groups. We do not use your device&apos;s advertising ID (IDFA on iPhone, Advertising ID on Android), and we do not ask iOS for permission to track you.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">Google.</strong> For installs that came from a Google ad, AppsFlyer shares these events with Google, so that Google Ads can tell us which of its ads worked. Google acts as an independent controller for this data under its own terms. We tell Google not to use it to show you personalized ads.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">Why, and our legal basis.</strong> We use this information only to measure how well our advertising works, for example how much we spend for each person who creates their first habit. In the European Economic Area, the United Kingdom and Switzerland, our legal basis is your consent, which also covers storing and reading the identifiers on your device under the UK Privacy and Electronic Communications Regulations and the EU ePrivacy rules. Elsewhere, our legal basis is our legitimate interest in measuring and improving our advertising, which we balance against your interests by sending no names, contact details, habit content or health data, using no advertising ID, and letting you switch it off at any time.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">How long we keep it.</strong> We keep the measurement record for an installation while you use Traction, and delete it with your account (within 14 days of you deleting it), or straight away when you turn ad measurement off. AppsFlyer keeps event-level data for 90 days, and aggregated reports that do not identify you for up to 25 months.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">Changing your mind.</strong> Turn off Settings &gt; Privacy &gt; Ad measurement at any time. The App stops sending data to AppsFlyer immediately, and we delete the measurement data we hold for that installation. Turning it off does not affect what was processed before.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">International transfers.</strong> AppsFlyer is based in Israel, which the UK and the EU recognise as providing adequate protection for personal data.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">Your rights.</strong> You can ask us for a copy of this data, or ask us to delete it, by emailing <a href="mailto:support@softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">support@softmaxco.io</a>. We will pass deletion requests on to AppsFlyer.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">How We Use Your Information</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">App Functionality:</strong> to authenticate your account, sync your data across devices, deliver push notification reminders, and provide customer support.</li>
            <li><strong className="text-ink">Analytics:</strong> to understand app performance, diagnose crashes and errors, and improve the user experience. Analytics data is linked to your identity to help us debug issues and understand usage patterns.</li>
            <li><strong className="text-ink">Ad measurement:</strong> to measure which of our own ads bring people to the App, through AppsFlyer, as described under <a href="#ad-measurement" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">Ad Measurement</a>.</li>
          </ul>
          <p className="text-base mb-4 leading-[1.65] font-medium text-ink">We do not use your data for:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Third-party advertising</li>
            <li>Showing you personalized or targeted ads</li>
            <li>Sharing with data brokers</li>
            <li>Tracking you across other apps or websites</li>
          </ul>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">How We Share Your Information</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We share your information only with the following service providers, solely to operate and maintain the App:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Firebase (Google)</strong> - authentication, file storage: email, name, auth tokens, bug report attachments.</li>
            <li><strong className="text-ink">Sentry</strong> - crash reporting and performance monitoring: crash logs, performance metrics, device info.</li>
            <li><strong className="text-ink">LogRocket</strong> - session replay and error debugging: user ID, session interaction data, error events.</li>
            <li><strong className="text-ink">Expo</strong> - push notification delivery: push notification tokens, device platform.</li>
            <li><strong className="text-ink">Anthropic</strong> - grouping in-app feedback so duplicate reports are handled together: feedback report text and the screen it was sent from, never your name, username or email.</li>
            <li><strong className="text-ink">Resend</strong> - delivering feedback reports to our team by email: report text, diagnostics, your account email as the reply address.</li>
            <li><strong className="text-ink">GitHub</strong> - tracking bug reports in a private repository: bug report text and diagnostics, never your email.</li>
            <li><strong className="text-ink">AppsFlyer</strong> - measuring which of our ads lead to installs and use, while ad measurement is on: random install IDs, ad source, device and app details, IP address, app opens, habit created, check-in and group joined events.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">These providers process data on our behalf and are contractually obligated to use it only for the purposes described above. The community features have not added any new third-party service providers.</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]"><strong className="text-ink">Google Ads.</strong> For installs that came from a Google ad, and while ad measurement is on, AppsFlyer shares the events listed under <a href="#ad-measurement" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">Ad Measurement</a> with Google so that Google Ads can report which of its ads worked. Google receives them as an independent controller, and we tell Google not to use them for personalized ads.</p>
          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">Sharing With Other Users</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">When you use community features, you share information directly with other people you choose to connect with. Your username, avatar, shared habit progress, comments, nudges, reactions, and group leaderboard standing are visible to your connections and the members of groups you join, and anyone you give your connection code or invite link to can view a preview of your public profile. This sharing is initiated by you and only occurs when you opt into community features. We do not make your community activity public on the open internet or to users you have not connected with.</p>
          <p className="text-base mb-4 leading-[1.65] font-medium text-ink">We do not sell your personal information. We do not share your data with data brokers, and the only data an advertising company receives is the ad measurement data described under <a href="#ad-measurement" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">Ad Measurement</a>, which is never used to show you personalized ads.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Data Retention</h2>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Your account data and habit/task data are retained as long as your account is active.</li>
            <li>When you delete your account, we initiate deletion of your data with a 14-day grace period, after which your data is permanently removed from our systems.</li>
            <li>Daily totals synced from Apple Health or Health Connect are retained with the linked habit and deleted with the habit or the account.</li>
            <li>Crash and diagnostic logs are retained according to the retention policies of our service providers (Sentry and LogRocket).</li>
            <li>Ad measurement records are kept while you use the App and deleted with your account or when you turn ad measurement off; AppsFlyer keeps event-level data for 90 days and aggregated reports for up to 25 months.</li>
            <li>Bug reports and feedback are retained to improve the App and may be removed upon request.</li>
            <li>When you delete your account, your community data, including connections, shared habits, comments, nudges, reactions, group memberships, blocks, and reports, is deleted along with your account, and your username, avatar, and connection code are removed from public view.</li>
            <li>Comments, nudges, and reactions you sent to others are removed from their views when your account is deleted.</li>
          </ul>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Data Security</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We take reasonable measures to protect your information:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Authentication tokens are stored in encrypted device storage (Secure Store on iOS, encrypted preferences on Android).</li>
            <li>All data transmitted between the App and our servers is encrypted using HTTPS/TLS.</li>
            <li>Passwords are never stored on your device; authentication is handled by Firebase.</li>
            <li>LogRocket sanitizes authentication request and response bodies to prevent credential exposure.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">While we strive to protect your personal information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Your Rights and Choices</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">Depending on your jurisdiction, you may have the following rights:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Access:</strong> request a copy of the personal data we hold about you.</li>
            <li><strong className="text-ink">Correction:</strong> update or correct inaccurate personal information through your in-app profile settings.</li>
            <li><strong className="text-ink">Deletion:</strong> delete your account and associated data from within the App or by contacting us.</li>
            <li><strong className="text-ink">Push Notifications:</strong> disable push notifications at any time through your device settings.</li>
            <li><strong className="text-ink">Ad Measurement:</strong> turn ad measurement off at any time in Settings &gt; Privacy &gt; Ad measurement.</li>
            <li><strong className="text-ink">Health Data:</strong> unlink any habit, disconnect all habits under Settings &gt; Health data, or revoke access in Apple Health or Health Connect settings.</li>
            <li><strong className="text-ink">Anonymous Use:</strong> use the App with a device-based account without providing personal contact information. Community features are not available to anonymous accounts.</li>
            <li><strong className="text-ink">Community Privacy:</strong> hide your statistics from the community, change or regenerate your connection code, block other users, report abusive content or behavior, and leave any group or end any share at any time from within the App.</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">To exercise any of these rights, contact us at the address listed below.</p>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">California Residents (CCPA)</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">If you are a California resident, you have the right to:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li>Know what personal information we collect, use, and disclose</li>
            <li>Request deletion of your personal information</li>
            <li>Not be discriminated against for exercising your privacy rights</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We do not sell personal information as defined by the California Consumer Privacy Act.</p>

          <h3 className="font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-ink/55 mt-8 mb-3">European Residents (GDPR)</h3>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">If you are located in the European Economic Area, the United Kingdom or Switzerland, our legal bases for processing your information are:</p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-base text-ink/60 leading-[1.65]">
            <li><strong className="text-ink">Contract:</strong> processing necessary to provide the App&apos;s services to you</li>
            <li><strong className="text-ink">Legitimate Interest:</strong> processing necessary for analytics, crash reporting, and improving the App</li>
            <li><strong className="text-ink">Consent:</strong> where required, such as for push notifications and ad measurement</li>
          </ul>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">You may also have the right to data portability and the right to lodge a complaint with your local data protection authority.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Children&apos;s Privacy</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">The App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us so we can promptly delete it.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Changes to This Privacy Policy</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy within the App or on our website and updating the &quot;Last Updated&quot; date above. Your continued use of the App after changes are posted constitutes your acceptance of the updated policy.</p>

          <h2 className="font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink/55 mt-12 mb-4 pt-5 border-t border-hairline">Contact Us</h2>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <p className="text-base text-ink/60 mb-4 leading-[1.65]">
            <strong className="text-ink">Email</strong>: <a href="mailto:support@softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">support@softmaxco.io</a>
            <br />
            <strong className="text-ink">Website</strong>: <a href="https://softmaxco.io" className="text-ink underline underline-offset-4 hover:text-ink/60 transition-colors">https://softmaxco.io</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
