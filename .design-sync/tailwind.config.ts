import type { Config } from 'tailwindcss';
import site from '../tailwind.config';

// Compiles the stylesheet shipped to claude.ai/design. Content is the Softmax
// site's own source (Traction pages excluded), so every class the site uses
// exists in the output; the safelist adds the general layout utilities and
// brand colors a design built with the system will reach for.
const brand = 'paper|ink|wash|hairline';
const scale = '0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|56|64|72|80|96';

export default {
  ...site,
  content: [
    './components/**/*.tsx',
    './app/page.tsx',
    './app/layout.tsx',
    './app/studio/**/*.tsx',
    './app/privacy/**/*.tsx',
    './app/terms/**/*.tsx',
    './.design-sync/previews/**/*.tsx',
  ],
  safelist: [
    { pattern: new RegExp(`^(bg|text|border|ring|divide)-(${brand})(/(5|10|15|20|25|40|50|55|60|65|70|80|90))?$`) },
    { pattern: new RegExp(`^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap|gap-x|gap-y|space-x|space-y)-(${scale})$`) },
    { pattern: new RegExp(`^(w|h|min-h|max-w)-(${scale}|full|screen|auto|fit)$`) },
    { pattern: /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|prose)$/ },
    { pattern: /^(flex|inline-flex|grid|block|inline-block|hidden|contents)$/ },
    { pattern: /^(flex-(row|col|wrap|1|none)|grow|shrink-0)$/ },
    { pattern: /^grid-cols-(1|2|3|4|5|6|12)$/ },
    { pattern: /^col-span-(1|2|3|4|6|12|full)$/ },
    { pattern: /^(items|justify|self|content)-(start|center|end|between|stretch|baseline)$/ },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|left|center|right|balance|pretty)$/ },
    { pattern: /^font-(sans|mono|normal|medium|semibold|bold)$/ },
    { pattern: /^(leading|tracking)-(none|tight|snug|normal|relaxed|tighter|wide|wider|widest)$/ },
    { pattern: /^(uppercase|lowercase|capitalize|italic|underline|truncate|antialiased)$/ },
    { pattern: /^rounded(-(none|sm|md|lg|xl|2xl|full))?$/ },
    { pattern: /^(border|border-t|border-b|border-y|border-x|border-l|border-r)$/ },
    { pattern: /^(relative|absolute|sticky|fixed|inset-0|overflow-hidden|object-cover|aspect-square|aspect-video)$/ },
    { pattern: /^opacity-(0|50|60|70|80|90|100)$/ },
  ],
} satisfies Config;
