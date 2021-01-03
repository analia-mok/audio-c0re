import { Link } from 'gatsby';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/locations">Locations</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}