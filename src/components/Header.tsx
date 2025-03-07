import React from 'react';
import { Globe, Trophy, Book, Calendar, HelpCircle } from 'lucide-react';
import { Link } from './Link';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="hover:opacity-90">
                <Logo />
              </Link>
            </div>
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
        </div>
      </div>
      <Navbar />
    </header>
  );
}