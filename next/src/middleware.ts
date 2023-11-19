import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pl|en)/:path*'],
}
