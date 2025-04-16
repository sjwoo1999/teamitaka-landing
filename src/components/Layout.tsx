import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isNotFound = location.pathname === '/404';

  return (
    <div className="flex flex-col min-h-screen">
      {!isNotFound && <Header />}
      <main className={`flex-grow ${isNotFound ? 'bg-black' : 'bg-gradient-to-b from-white via-brand-bg to-white'}`}>
        <div className={isNotFound ? '' : 'w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12'}>
          <Outlet />
        </div>
      </main>
      {!isNotFound && <Footer />}
    </div>
  );
};

export default Layout;
