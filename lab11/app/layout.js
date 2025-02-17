import './globals.css';
import HeaderBackground from './main-header-backgroud';
import MainHeader from './main-header';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <HeaderBackground/>
      <MainHeader/>
      

        {children}
      </body>
    </html>
  );
}
