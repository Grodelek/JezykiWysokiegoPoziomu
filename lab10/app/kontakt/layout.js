import Header from '../components/Header';

export const metadata = {
  title: 'Kontakt',
};

export default function KontaktLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#fff3e0', padding: '1rem' }}>
      <Header title="Kontakt" />
      {children}
    </div>
  );
}
