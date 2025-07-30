import './globals.css';

export const metadata = {
  title: 'BetterInternship',
  description: 'Your one-stop internship platform in the Philippines',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <main className="pt-4 px-6">{children}</main>
      </body>
    </html>
  );
}
