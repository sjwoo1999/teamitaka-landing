// src/components/Footer.tsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-10 px-4 sm:px-6 lg:px-10 rounded-t-3xl shadow-inner">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-brand">TEAMITAKA</h2>
          <p className="text-gray-400">혁신적인 솔루션을 제공하는 티미타카입니다.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">링크</h2>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-brand transition">소개</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-brand transition">프로젝트</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-brand transition">문의</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">소셜 미디어</h2>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-400 hover:text-brand-light transition">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-light transition">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-light transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 TEAMITAKA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;