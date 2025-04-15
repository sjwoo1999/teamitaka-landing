// ✅ src/components/Layout.tsx
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white via-brand-bg to-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;