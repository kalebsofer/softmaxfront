// ---------------------------------------------------------------------------
// All site copy lives here. Edit the strings below and the site updates,
// nothing else needs touching. Grouped top-to-bottom in page order.
//
// Not included: the legal pages (app/privacy, app/terms, app/traction/*),
// which are full legal documents edited in place.
// ---------------------------------------------------------------------------

export const nav = {
  brand: 'Softmax',
  links: {
    work: 'Work',
    studio: 'Studio',
    traction: 'Traction',
    team: 'Team',
  },
  messageUs: 'Message us',
  getTraction: 'Get Traction',
  menu: 'Menu',
  close: 'Close',
};

export const hero = {
  headline: 'We are a collective of data engineers and AI specialists.',
  // Mobile-only pills under the headline
  primaryCta: 'Message us',
  secondaryCta: 'See the work',
};

export const capabilityStrip = {
  items: [
    'discovery',
    'strategy',
    'delivery',
    'compliance',
  ],
  // Mobile-only row under the marquee
  scrollHint: 'Scroll ↓',
};

export const work = {
  title: 'Recent work',
  fac: {
    title: 'Founders and Coders',
    meta: 'Curriculum · Training · Recruitment',
    imageAlt: 'Founders and Coders workshop',
  },
  traction: {
    title: 'Traction',
    meta: 'Our own product · iOS & Android',
    imageAlt: 'Traction habit tracker in hand on a London street',
  },
  statement:
    'Strategy, design and engineering from one senior team. We scope thoroughly, ship quickly and hand over completely.',
  whyUs: 'Why us?',
};

export const whatWeDo = {
  title: 'What we do',
  meta: 'Five things, properly',
  rows: [
    {
      n: '01',
      title: 'Scope and strategy',
      note: 'Tell us your problem, we\'ll organise a short call and provide an honest read on whether we are right for you.',
    },
    {
      n: '02',
      title: 'Data and systems engineering',
      note: 'Data Lakes for scaling businesses or your first pipeline, we understand what infrastructure your volume demands.',
    },
    {
      n: '03',
      title: 'Automation and internal tools',
      note: 'You know where your bottlenecks are, we can help you clear them.',
    },
    {
      n: '04',
      title: 'AI and agentic systems',
      note: 'We\'ve shipped RAG systems with answers you can trace to source, and harnesses for bespoke agents. We\'ve also talked clients out of both. The first question is whether AI is the right tool, conventional software often is.',
    },
    {
      n: '05',
      title: 'Reliability & handover',
      note: 'Docs, tests and a team that no longer needs us.',
    },
  ],
};

export const howWeWork = {
  title: 'How we work',
  meta: 'Four weeks to something real',
  steps: [
    {
      n: '01',
      title: 'Discovery',
      body: "Understand the problem before the tooling: who owns the data, what good looks like, and what's already been tried.",
    },
    {
      n: '02',
      title: 'P.O.C',
      body: 'Start with the cheapest thing that could possibly answer the question, then earn every extra parameter.',
    },
    {
      n: '03',
      title: 'Ship',
      body: "In front of real users early, then hardened for production. What ships should be legible at 4am by someone who didn't write it.",
    },
    {
      n: '04',
      title: 'Handoff',
      body: "A system isn't done until the team that owns it next can change it without us in the room.",
    },
  ],
};

export const traction = {
  eyebrow: 'Our own product',
  title: 'Traction: the peer-to-peer habit tracker',
  lead: 'Designed, built and shipped in-house to iOS and Android. The shortest proof that we take products all the way, not just to a prototype.',
  // Links to the app's own page at /traction
  pageCta: 'Explore Traction',
  stats: [
    { value: '2', label: 'platforms' },
    { value: '4', label: 'core screens' },
    { value: '0', label: 'outsourced engineers' },
  ],
  marquee: [
    'Free on iOS & Android',
    'Calendar sync',
    'Background detection',
    'No ads',
    'No streak guilt',
  ],
  badges: {
    appStoreName: 'App Store',
    playName: 'Google Play',
  },
};

// softmaxco.io/traction: the app's own landing page.
// Bracketed text is a placeholder still waiting on real copy.
export const tractionLanding = {
  meta: {
    title: 'Traction: build better habits together',
    description:
      "The social network for building better habits. Whether you're part of a group to keep each other accountable or on a solo mission to build consistency, Traction is a low-friction interface for setting goals and tracking progress. Free on iOS and Android.",
  },
  brand: 'traction',
  brandMarkAria: 'Traction home',
  nav: {
    label: 'Main',
    links: [
      { href: '#why', label: 'Why' },
      { href: '#how', label: 'How' },
      { href: '#faq', label: 'FAQ' },
    ],
    cta: 'Download',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    title: 'Accountability. Shared.',
    lead: 'Traction is a free tool to plan and track your goals, and share progress with friends, family or your community.',
    /** The three phones, left to right. */
    screens: [
      { src: 'android-progress', alt: 'Traction progress screen: momentum by weekday and the month in a calendar' },
      { src: 'android-home', alt: "Traction home screen: momentum tile, milestones and today's habits" },
      { src: 'android-community', alt: 'Traction group screen: momentum this round and the members of Physical Recovery' },
    ],
    milestone: 'First round complete',
    reactions: ['👏', '🔥', '🎉'],
    reactionCount: 5,
    reactionsAria: 'Reactions: clap, fire and party, 5 in total',
  },
  why: {
    eyebrow: 'Why Traction',
    title: 'Built for showing up, together.',
    story: {
      intro:
        "Traction's creator, Kaleb, built the app while in physical rehabilitation following a career-ending football injury. Over eight months of slow physiotherapy, strict nutrition and regular hospital visits, he found two things that would have made the journey easier:",
      points: [
        "Celebrating small wins: progress is slow and it's hard to see in the moment, so being less self-critical about off days is super important.",
        'Although he was incredibly grateful for the support, constantly updating friends, family and specialists on progress became repetitive.',
      ],
      outro: "Here's how Traction addresses those:",
    },
    habits: {
      title: 'Build or break a habit',
      body: "Some habits are ones we're trying to break. Customise how Traction handles them.",
      toggle: ['Build', 'Break'],
      toggleAria: 'Goal: Break',
      rows: [
        { name: 'Screen time', kind: 'Limit', used: 45, limit: 120, aria: '45 of 120 minutes used today' },
        { name: 'No alcohol', kind: 'Resist', aria: 'Resisted today' },
      ],
    },
    momentum: {
      title: 'Momentum, not streaks',
      body: 'Momentum is the share of your planned sessions you showed up for. A missed day nudges it. It never resets you to zero.',
      figure: '10 of 14',
      band: 'Building',
      rampAria:
        'Momentum ramp, from Getting going through Building and Consistent to Dedicated. Marker at 71 per cent.',
      bands: [
        { name: 'Getting going', rule: 'Below 50%', color: 'var(--tl-momentum-getting-going)' },
        { name: 'Building', rule: '50% and up', color: 'var(--tl-momentum-building)' },
        { name: 'Consistent', rule: '6 in every 7', color: 'var(--tl-momentum-consistent)' },
        { name: 'Dedicated', rule: 'Every session', color: 'var(--tl-momentum-dedicated)' },
      ],
    },
    friends: {
      title: 'Habits with friends',
      body: 'Start a group, share a habit and play it in rounds. Everyone sees who showed up.',
      /** Each member's last seven sessions: 1 logged, 0 missed. */
      members: [
        { name: 'mayaruns', initial: 'M', series: 1, trail: [1, 1, 1, 1, 1, 1, 1] },
        { name: 'tomk', initial: 'T', series: 2, trail: [1, 1, 0, 1, 1, 1, 1] },
        { name: 'priya_s', initial: 'P', series: 3, trail: [1, 1, 1, 0, 1, 1, 0] },
      ],
    },
    cheers: {
      title: 'Cheers, not nags',
      body: "React to a friend's session with an emoji, or send a gentle check-in when they have gone quiet.",
      comment: { name: 'physio_fran', initial: 'F', series: 2, text: 'Good work this week' },
      reactions: ['👏', '🔥', '🎉', '💪', '❤️', '🙌'],
      trayAria: 'Reaction tray: clap, fire, party, strong, heart and raised hands, plus more',
      checkIn: 'Check in',
    },
    rhythm: {
      title: 'See your rhythm',
      body: 'Your last fortnight and your whole year, drawn so the good days stand out.',
      fortnightLabel: 'Last 14 days',
      fortnightAria: 'Fortnight grid: 11 of the last 14 days logged, one rest day',
      yearLabel: 'This year',
      yearAria: 'Contributions graph filling in over the year',
    },
    milestones: {
      title: 'Milestones',
      body: 'Gold chips and a burst of confetti for the moments worth marking.',
      earned: ['First week', 'First round'],
      next: '50 sessions',
    },
  },
  how: {
    eyebrow: 'How it works',
    /**
     * Four parts, each three captions with a crop of the app below. `image`
     * names a file in public/images/traction/how; `visual` names one drawn in code.
     */
    sections: [
      {
        id: 'how-goals',
        title: 'Goals.',
        items: [
          {
            caption: 'Tell Traction your goal, however detailed',
            image: 'goal-details',
            alt: 'Your plan: the goal Knee Rehabilitation, the recovery goal and current activity',
          },
          {
            caption: 'Traction works with you to design a routine',
            image: 'goal-habits',
            alt: 'Habits suggested for the goal: rehab exercises, good rest, protein and supplements',
          },
          {
            caption: 'That plan becomes meaningful scheduled items to track',
            image: 'goal-progress',
            alt: 'Progress list with the new habits and how many sessions each has done this week',
          },
        ],
      },
      {
        id: 'how-groups',
        title: 'Groups.',
        items: [
          {
            caption: 'Join or create a group around a goal or a single habit',
            image: 'group-join',
            alt: 'A group built around one habit, knee rehab',
          },
          {
            caption: 'Celebrate progress with checkpoints and achievements',
            image: 'group-checkpoints',
            alt: 'The current round on a group screen, with checkpoint badges at 50% and 80% together',
          },
          {
            caption: 'Check in and motivate anyone falling behind',
            image: 'group-cheers',
            alt: "A host's message of encouragement to the group, with reactions from members",
            reactions: true,
          },
        ],
      },
      {
        id: 'how-journal',
        title: 'Journal.',
        items: [
          {
            caption: 'Use Traction as your journalling app',
            image: 'journal-header',
            alt: 'A journal entry for Tuesday 24 November',
          },
          {
            caption: 'Compare your written or spoken history against your habit patterns',
            image: 'journal-entry',
            alt: "A journal entry with that day's habits listed below it",
          },
          {
            caption: 'Your personal entries stay private',
            image: 'journal-private',
            alt: 'The Journal tile on the home screen',
          },
        ],
      },
      {
        id: 'how-routines',
        title: 'Routines.',
        items: [
          {
            caption: 'Linking habits is proven to improve permanence in habit formation',
            visual: 'link-wireframe',
            alt: 'Linking three habits, run, stretch and shake, into one routine',
          },
          {
            caption: 'Create links between successive habits to form routines',
            image: 'routine-home',
            alt: 'The routine towards 10k on the home screen: run, stretch and shake',
          },
          {
            caption: "Check all these items off from your device's home screen",
            image: 'routine-widget',
            alt: "The Traction widget on a phone home screen with the routine and the day's tasks",
          },
        ],
      },
    ],
    linkWireframe: {
      habits: ['Run', 'Stretch', 'Shake'],
      days: 'Tue, Thu, Sat',
      name: 'towards 10k',
      cta: 'Create link',
    },
  },
  proof: {
    title: 'What people say.',
    quotes: [
      {
        quote: 'Different take on a typical tracker, it actually sticks this time around.',
        stars: 5,
        name: 'James98829',
        use: 'Uses it for day-to-day routine tasks',
      },
      {
        quote: 'Very nice work, I now bring real data with me to check-ins.',
        stars: 5,
        name: 'IzaakRS',
        use: 'Uses it with his physio to track physical rehab',
      },
      {
        quote: 'Brilliant way to send gentle reminders',
        stars: 5,
        name: 'Jenny2k14',
        use: 'Uses it with her book club',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      {
        q: 'What is momentum?',
        a: 'Momentum is the share of your planned sessions you actually did. It moves through four bands: Getting going, Building, Consistent and Dedicated.',
      },
      {
        q: 'What happens if I miss a day?',
        a: 'Nothing dramatic. There is no streak to break. Your momentum dips a little and picks back up the next time you show up.',
      },
      {
        q: 'What is a round?',
        a: 'A round is a set stretch of time a group plays together. Everyone starts fresh, and standings and momentum are counted for that round.',
      },
      {
        q: 'Can I use Traction on my own?',
        a: 'Yes. You can track habits and tasks solo and start or join a group whenever you like.',
      },
      {
        q: 'Is Traction on iOS and Android?',
        a: 'Yes. Traction is available on both the App Store and Google Play.',
      },
      { q: 'How much does it cost?', a: "It's free!" },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'Start your first round.',
    lead: 'Download Traction, pick a habit and invite someone to keep it with you.',
  },
  badges: {
    appStoreKicker: 'Download on the',
    appStoreName: 'App Store',
    appStoreAria: 'Download Traction on the App Store',
    playKicker: 'Get it on',
    playName: 'Google Play',
    playAria: 'Get Traction on Google Play',
  },
  footer: {
    label: 'Footer',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    supportEmail: 'support@softmaxco.io',
    company: 'Softmax Ltd',
  },
};

export const team = {
  title: 'Who are we?',
  meta: 'Tap a name for the long version',
  linkedinLabel: 'LinkedIn',
  members: [
    {
      name: 'Kaleb',
      role: 'Founder, Engineer',
      image: '/images/kaleb.jpg',
      linkedin: 'https://www.linkedin.com/in/kalebsofer/',
      description:
        'Studied as an aerospace engineer then moved to data in 2018. Since then: engineering and consultancy for Deliveroo, Santander and the UK Ministry of Justice.',
    },
    {
      name: 'Margaux',
      role: 'AI',
      image: '/images/margaux.jpg',
      linkedin: 'https://www.linkedin.com/in/margaux-dowland-69962529b/',
      description:
        'MSc from Imperial College London with distinction, and prize-winner for the best MSc Pure Mathematics project of 2023. Now an ML engineer at Oak Academy building AI for education.',
    },
    {
      name: 'Luka',
      role: 'Product',
      image: '/images/luka.jpg',
      linkedin: 'https://www.linkedin.com/in/luka-vlaskalic-bba5988a/',
      description:
        'MSc Physics with distinction from Manchester, then five years leading products and technical teams in renewable energy. Recently moved from Amp X, a digital energy platform, to CDP.',
    },
    {
      name: 'Izaak',
      role: 'Advisor',
      image: '/images/izaak.png',
      linkedin: 'https://www.linkedin.com/in/izaakrogan/',
      description:
        'Founder of the Machine Learning Institute and a software engineer of over a decade, currently the CTO of Founders and Coders C.I.C.',
    },
  ],
};

export const principles = {
  title: 'How we think',
  items: [
    {
      title: 'Ship the smallest useful thing',
      description:
        'Scope down ruthlessly. A working feature today beats a perfect one next quarter.',
    },
    {
      title: 'Measure what matters',
      description:
        'Every metric should connect to a decision. If it does not inform action, drop it.',
    },
    {
      title: 'Design for calm',
      description:
        'Good tools reduce anxiety. Every notification and prompt earns its place.',
    },
    {
      title: 'Secure by default',
      description:
        'Not a phase. Baked into architecture, review and deployment from day one.',
    },
  ],
};

export const contact = {
  title: "Tell us what's broken. We'll scope it in one call.",
  email: 'hello@softmaxco.io',
  emailNote: 'Reply within 24 hours',
  location: 'London, UK',
  locationNote: 'Remote-first, UK & EU hours',
  booking: {
    cta: 'Book a call',
    title: 'Book a call',
    close: 'Close',
    fallback: 'Open in Google Calendar',
    // Google Calendar appointment schedule (kalebsofer@gmail.com), resolved
    // from https://calendar.app.google/6mRQKtZEQc7xRN7X6 - gv=true makes the
    // page embeddable. Leave empty to hide the button.
    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ134F4T6irVswtg8zy7mfbVvdTpPqLpey-a50hf9oCpXanWyzQcf775q62kUm3j8tNXcBmh5NEj?gv=true',
  },
  form: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    messageLabel: 'What needs building',
    submit: 'Send →',
    sending: 'Sending…',
    error: 'Something went wrong. Try again, or email hello@softmaxco.io.',
  },
  success: {
    title: "Thanks, that's landed.",
    body: "We'll come back to you soon.",
  },
};

export const footer = {
  company: 'Softmax Ltd',
  location: 'London, United Kingdom',
  email: 'hello@softmaxco.io',
  links: {
    privacy: 'Privacy',
    terms: 'Terms',
    tractionData: 'Traction data',
  },
  copyrightName: 'Softmax Ltd',
};

// ---------------------------------------------------------------------------
// /studio page
// ---------------------------------------------------------------------------

export const studio = {
  metaTitle: 'Studio - Softmax',
  metaDescription:
    'Senior engineers, a fixed scope, and software your team can maintain without us.',
  eyebrow: 'Studio - capabilities & engagements',
  headline:
    'Senior engineers, a fixed scope, and software your team can maintain without us',
  lead: 'No account managers, no prolonged discovery, the people who scope the work are the people who deliver it.',
  stats: [
    { value: '1-2 weeks', label: 'to build scope and strategy' },
    { value: '100%', label: 'senior, in-house' },
    { value: '6 months ', label: 'on call after handover' },
    { value: '2', label: 'projects slots next month' }
  ],
  capabilitiesSection: {
    title: 'Capabilities',
    meta: 'Select one to see the shape of the work',
    durationLabel: 'Typical duration',
    teamLabel: 'Team',
    outcomeLabel: 'You end up with',
  },
  capabilities: [
    {
      n: '01',
      title: 'Scope and strategy',
      meta: 'Capability 01',
      body: 'A short call to frame the problem, then we read the code, talk to the team and put the plan in writing. You get an honest read on whether we are right for it, and who is, if we are not.',
      list: [
        { k: 'DAY 1', v: 'One call to frame the problem' },
        { k: 'WK 1', v: 'Code, data and team review' },
        { k: 'WK 2', v: 'Written scope with a fixed shape' },
        { k: 'THEN', v: 'Build it with us, or without us' },
      ],
      weeks: '1–2 weeks',
      team: '1–2 engineers',
      out: 'Costed, fixed-shape scope',
    },
    {
      n: '02',
      title: 'Data and systems engineering',
      meta: 'Capability 02',
      body: 'Your first pipeline or a lake feeding a scaling business: audit what exists, re-model around the decisions you actually make, then test and monitor every pipeline feeding it.',
      list: [
        { k: 'WK 1–2', v: 'Audit and data contracts' },
        { k: 'WK 2–3', v: 'Data quality and requirements' },
        { k: 'WK 3–6', v: 'Infra and systems engineering' },
        { k: 'WK 6–10', v: 'Testing transforms, pipelines, monitoring' },
        { k: 'THEN', v: 'Runbook and ownership transfer' },
      ],
      weeks: '6–10 weeks',
      team: '2 engineers',
      out: 'Pipelines + dashboards',
    },
    {
      n: '03',
      title: 'Automation and internal tools',
      meta: 'Capability 03',
      body: 'You know where your bottlenecks are. We map the process as it really runs, find opportunity for automation, and leave the manual processes which need a human in place.',
      list: [
        { k: 'WK 1', v: 'Process mapped and measured' },
        { k: 'WK 2–4', v: 'Automation built and tested' },
        { k: 'WK 4–6', v: 'Internal tool for exceptions' },
        { k: 'THEN', v: 'Training and runbook' },
      ],
      weeks: '3–6 weeks',
      team: '1–2 engineers',
      out: 'Internal tool + runbook',
    },
    {
      n: '04',
      title: 'AI and agentic systems',
      meta: 'Capability 04',
      body: "We've shipped RAG systems with answers you can trace to source, and harnesses for bespoke agents, and talked clients out of both. First we ask whether AI is the right tool; then we build the unglamorous parts: evals, a rollout you can switch off, then the feature.",
      list: [
        { k: 'WK 1', v: 'Prototype in front of real data' },
        { k: 'WK 2', v: 'Eval set and baselines agreed' },
        { k: 'WK 3–6', v: 'Production build behind a flag' },
        { k: 'THEN', v: 'Rollout, monitoring, handover' },
      ],
      weeks: '4–8 weeks',
      team: '2 engineers',
      out: 'Shipped feature + evals',
    },
    {
      n: '05',
      title: 'Reliability & handover',
      meta: 'Capability 05',
      body: 'Monitoring that speaks before your customers do, tests that mean something, documentation written for the person who joins next year.',
      list: [
        { k: 'WK 1', v: 'Failure modes and SLOs agreed' },
        { k: 'WK 2–3', v: 'Alerting and dashboards' },
        { k: 'WK 3–4', v: 'Docs, tests, walkthroughs' },
        { k: 'THEN', v: '3 months on immediate support, six months on call' },
      ],
      weeks: '2–4 weeks',
      team: '1 engineer',
      out: 'A team that owns it',
    },
  ],
  engage: {
    title: 'Ways to work with us',
    meta: 'All fixed-scope, all written down first',
    cards: [
      {
        kicker: '01 - Sprint',
        title: 'Two-week diagnostic',
        body: 'We come in, talk to the team, review your codebase if necessary, and leave you a written plan you could hand to anyone.',
        deliverables: ['Architecture review', 'Risk register', 'Costed roadmap'],
      },
      {
        kicker: '02 - Build',
        title: 'Ship it with us',
        body: 'Design and engineering through to production, with your team in every review so nothing is a black box.',
        deliverables: ['Minimum 6 weeks', 'Weekly demo', 'Handover included'],
      },
      {
        kicker: '03 - Teach',
        title: 'Curriculum & workshops',
        body: 'We design training and run it, the way we do for Founders and Coders apprentices and the public.',
        deliverables: ['Syllabus design', 'Live delivery', 'Technical screening'],
      },
    ],
  },
  caseStudy: {
    eyebrow: 'Client - Founders and Coders',
    title: "We built the curriculum that trains the UK's next AI engineers",
    context:
      'Founders and Coders is a community interest company delivering training courses and apprenticeships in AI and software engineering. We work across their whole pipeline.',
    rows: [
      {
        n: '01',
        title: 'Apprenticeship curriculum',
        body: 'helped to design the AI and software engineering syllabus for their 12 month course.',
      },
      {
        n: '02',
        title: 'Workshops',
        body: 'delivered to apprentices and to the public, hands-on.',
      },
      {
        n: '03',
        title: 'Technical screening',
        body: 'built and ran the recruitment that picks each cohort.',
      },
    ],
    link: 'foundersandcoders.com',
    imageCaptions: {
      main: 'workshop photography: apprentices at the whiteboard',
      left: 'curriculum spread',
      right: 'screening dashboard',
    },
  },
  cta: {
    title: 'Two slots left this quarter.',
    lead: "One call is usually enough for us to tell you whether we're the right studio for it, and who is, if we aren't.",
    primary: 'Book a scoping call',
    secondary: 'hello@softmaxco.io',
  },
};
