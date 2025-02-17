import Header from '../components/Header';

export const metadata = {
  title: 'Moje Zainteresowania',
};

export default function ZainteresowaniaLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '1rem' }}>
      <Header title="Moje Zainteresowania" />
      {children}
    </div>
  );
}
