import { ShoppingBag, Search, Sun, Moon, Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ dark, setDark, cartCount, onCart, search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="navbar">
    <a className="brand" href="#home"><span className="brand-mark"><Sparkles size={19}/></span><span>gadget<span className="brand-accent">nest</span><small>THOUGHTFUL FINDS FOR YOUR SPACE</small></span></a>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
      <a href="#shop" onClick={() => setMenuOpen(false)}>Shop all</a><a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
    </nav>
    <div className="nav-actions">
      <label className="search-box"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Find your next fave..." /></label>
      <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle day and night theme">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
      <button className="cart-button" onClick={onCart} aria-label="Open shopping cart"><ShoppingBag size={19}/><span>Bag</span><b>{cartCount}</b></button>
      <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </div>
  </header>
}