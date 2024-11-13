import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lato, Nunito } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ReduxProvider } from '@/lib/redux/provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const nunito = Nunito({ weight:"200", subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MeraLuggage - Luggage Delivery Made Simple',
  description: 'Experience hassle-free luggage transport service for travellers across India and beyond with our reliable service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}