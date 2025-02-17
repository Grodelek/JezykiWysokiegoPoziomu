import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
      <Link href="/">O mnie</Link>
      <Link href="/zainteresowania">Moje zainteresowania</Link>
      <Link href="/ulubione">Ulubiony film lub gra</Link>
      <Link href="/kontakt">Kontakt</Link>
    </nav>
  );
}
