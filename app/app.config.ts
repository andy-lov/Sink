export default defineAppConfig({
  title: 'Blyn',
  github: 'https://github.com/Blyn-hub/',
  coffee: 'https://blyn.link/coffee',
  twitter: 'https://blyn.link/twitter',
  telegram: 'https://blyn.link/telegram',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://blyn.link/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
