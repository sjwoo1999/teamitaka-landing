// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brand hover:text-brand-dark transition uppercase tracking-wide">
          TEAMITAKA
        </Link>
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={navOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-6 ${navOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link to="/" className="text-gray-800 hover:text-brand-dark transition">홈</Link></li>
          <li><Link to="/about" className="text-gray-800 hover:text-brand-dark transition">소개</Link></li>
          <li><Link to="/projects" className="text-gray-800 hover:text-brand-dark transition">프로젝트</Link></li>
          <li><Link to="/contact" className="text-gray-800 hover:text-brand-dark transition">문의</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;