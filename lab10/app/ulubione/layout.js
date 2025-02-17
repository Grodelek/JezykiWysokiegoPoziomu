import Header from '../components/Header';

export const metadata = {
  title: 'Ulubiony Film lub Gra',
};

export default function UlubioneLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#e8f5e9', padding: '1rem' }}>
      <Header title="Ulubiony Film lub Gra" />
      {children}
    </div>
  );
}
