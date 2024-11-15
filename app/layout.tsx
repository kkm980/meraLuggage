import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { ReduxProvider } from '@/lib/redux/provider';
import Navbar from '@/components/navBar';
import Footer from '@/components/footer';

import FixedNav from '@/components/navBar/FixedNav';
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'MeraLuggage | Luggage Delivery Made Simple',
  description: 'Experience hassle-free luggage transport service for travellers across India and beyond with our reliable service.',
  icons: {
    icon: "/images/luggage.png",
  },
  openGraph: {
    title: "MeraLuggage | Luggage Delivery Made Simple",
    description: "Experience hassle-free luggage transport service for travellers across India and beyond with our reliable service.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_REFERRAL_SHARE_URL}/en/airdrop`,
    images: [
      {
        url: "/images/luggage.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeraLuggage | Luggage Delivery Made Simple",
    description: "Experience hassle-free luggage transport service for travellers across India and beyond with our reliable service.",
    images: [
      "/images/luggage.png",
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
            <div className="flex min-h-screen flex-col items-center">
              <Navbar />
              <FixedNav />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}