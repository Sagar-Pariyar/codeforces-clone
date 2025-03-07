import React from 'react';
import { Link } from './Link';
import { Logo } from './Logo';

const navItems = [
  { href: '/home', label: 'HOME' },
  { href: '/top', label: 'TOP' },
  { href: '/catalog', label: 'CATALOG' },
  { href: '/contests', label: 'CONTESTS' },
  { href: '/gym', label: 'GYM' },
  { href: '/problemset', label: 'PROBLEMSET' },
  { href: '/groups', label: 'GROUPS' },
  { href: '/rating', label: 'RATING' },
  { href: '/edu', label: 'EDU' },
  { href: '/api', label: 'API' },
  { href: '/calendar', label: 'CALENDAR' },
  { href: '/help', label: 'HELP' },
  { href: '/rayan', label: 'RAYAN' },
];

export function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-gray-200">
          <Link href="/" className="hover:opacity-90">
            <Logo />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-5 h-3" />
              <img src="https://flagcdn.com/w20/ru.png" alt="Russian" className="w-5 h-3" />
            </div>
            <div className="flex space-x-4">
              <Link href="/enter">Enter</Link>
              <Link href="/register">Register</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6 h-10 text-sm border-b border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 font-medium py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}