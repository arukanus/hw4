// src/components/Layout.tsx
import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">React App</div>
          <div>
            <Link href="/" className="px-4 py-2 hover:bg-blue-700 rounded">Home</Link>
            <Link href="/create-product" className="px-4 py-2 hover:bg-blue-700 rounded">Create Product</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-1 py-8">{children}</main>
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 React App</p>
      </footer>
    </div>
  );
};

export default Layout;