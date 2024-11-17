import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { ReduxProvider } from '@/lib/redux/provider';
import Navbar from '@/components/navBar';
import Footer from '@/components/footer';

import FixedNav from '@/components/navBar/FixedNav';
import { Montserrat } from 'next/font/google'
import { assets } from '@/constants/assets';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({
  weight: "300",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'name | Delivery Made Simple',
  description: 'Experience hassle-free  transport service for travellers across India and beyond with our reliable service.',
  icons: {
    icon: assets?.favicon,
  },
  openGraph: {
    title: "name |  Delivery Made Simple",
    description: "Experience hassle-free  transport service for travellers across India and beyond with our reliable service.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_REFERRAL_SHARE_URL}/en/airdrop`,
    images: [
      {
        url: assets?.favicon,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "name |  Delivery Made Simple",
    description: "Experience hassle-free  transport service for travellers across India and beyond with our reliable service.",
    images: [
      assets?.favicon,
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col items-center bg-backgroundColor-light-foreground dark:bg-backgroundColor-dark-foreground p-0 m-0">
              <Navbar />
              <FixedNav />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}