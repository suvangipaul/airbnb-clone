import './globals.css';
import Navbar from '@/components/navbar';
import { Nunito } from 'next/font/google';
import RegisterModal from '@/components/modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Clone of the airbnb website',
};

const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
