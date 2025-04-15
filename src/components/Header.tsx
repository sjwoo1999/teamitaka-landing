// src/components/Header.tsx
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  const navItems = [
    { label: '홈', to: '/' },
    { label: '소개', to: '/about' },
    { label: '프로젝트', to: '/projects' },
    { label: '문의', to: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        {/* 로고 */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-brand hover:text-brand-dark uppercase tracking-wide whitespace-nowrap"
        >
          TEAMITAKA
        </Link>

        {/* 내비게이션 메뉴 */}
        <ul className="flex flex-nowrap justify-start sm:justify-end gap-6 text-sm sm:text-base font-medium overflow-x-auto sm:overflow-visible whitespace-nowrap">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`transition duration-200 ${
                  pathname === to
                    ? 'text-brand font-semibold visited:text-brand'
                    : 'text-gray-800 hover:text-brand-dark visited:text-gray-800'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;