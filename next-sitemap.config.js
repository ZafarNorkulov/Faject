/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://faject.vercel.app",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
