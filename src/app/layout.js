import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My Dog App',
  description: 'A Next.js app to view random dog images and breeds.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/breeds">List of Breeds</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Dog App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;