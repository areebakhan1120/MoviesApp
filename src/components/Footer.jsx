import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>

  <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                 Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="footer__link">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link no-cursor">
                  TV Series
                </Link>
              </li>
            </ul>
            <p className="footer__text">
  © Copyright 2025 | All rights reserved
</p>
    </footer>
  )
}
