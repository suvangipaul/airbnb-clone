import './globals.css';
import Navbar from '@/components/navbar';
import { Nunito } from 'next/font/google';

import RegisterModal from '@/components/modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/modals/LoginModal';
import RentModal from '@/components/modals/RentModal';
import SearchModal from '@/components/modals/SearchModal';

import getCurrentUser from '@/actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Clone of the airbnb website',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
