import './globals.css';
import { Providers } from './providers';

import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'BetterInternship',
  description: 'Your one-stop internship platform in the Philippines',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="pt-4 px-6">{children}</main>
        </Providers> 
      </body>
    </html>
  );
}
