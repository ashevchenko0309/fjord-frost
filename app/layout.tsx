import Navbar from 'components/layout/navbar';
import { ensureStartsWith } from 'lib/utils';
import { Crimson_Pro, Roboto } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Footer from '../components/layout/footer/index';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headers',
  weight: ['300', '500', '600', '700']
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500']
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${crimsonPro.variable} bg-primary-background scroll-smooth`}>
      <body className="bg-[#F7F9FB] font-body text-neutral-80 overflow-x-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <Suspense>
          <main className="overflow-hidden">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
