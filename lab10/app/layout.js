import './globals.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Moja Strona',
  description: 'Portfolio zbudowane w Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Navigation />
        <div style={{ padding: '1rem' }}>{children}</div>
      </body>
    </html>
  );
}
