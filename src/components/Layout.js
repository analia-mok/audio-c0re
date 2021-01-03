import { Link } from 'gatsby';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Locations</li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}