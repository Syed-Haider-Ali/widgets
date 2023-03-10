import React from 'react'
import Link from './Link'

const Header = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" href="/">Accordian <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/dropdown">Dropdown</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/translate">Translate</Link>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}

export default Header