import { useMemo, useState } from 'react'
import { ArrowRight, SlidersHorizontal, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryTiles from './components/CategoryTiles'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import { products } from './data/products'

export default function App() {
  const [dark, setDark] = useState(false)
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const addToCart = product => {
    setCart(old => old.some(item => item.id === product.id) ? old.map(item => item.id === product.id ? {...item, qty:item.qty+1} : item) : [...old, {...product, qty:1}])
    setNotice(`${product.name} added to your bag`)
    window.setTimeout(() => setNotice(''), 2200)
  }
  const updateQty = (id, delta) => setCart(old => old.map(item => item.id === id ? {...item, qty:item.qty+delta} : item).filter(item => item.qty > 0))
  const removeItem = id => setCart(old => old.filter(item => item.id !== id))
  const visibleProducts = useMemo(() => {
    let list = products.filter(p => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'low') list = [...list].sort((a,b) => a.price-b.price)
    if (sort === 'high') list = [...list].sort((a,b) => b.price-a.price)
    if (sort === 'rating') list = [...list].sort((a,b) => b.rating-a.rating)
    return list
  }, [category, search, sort])
  return <div className={dark ? 'app dark' : 'app'}>
    <div className="announcement"><Sparkles size={13}/> A little joy for your everyday <span>·</span> Free shipping on orders over Rs. 8,000 <a href="#shop">SHOP NOW ↗</a></div>
    <Navbar dark={dark} setDark={setDark} cartCount={cart.reduce((s,i)=>s+i.qty,0)} onCart={() => setCartOpen(true)} search={search} setSearch={setSearch}/>
    <main><Hero/><div className="marquee" aria-label="Zauq Living brand message"><div>GOOD DESIGN, GOOD DAYS <span>✳</span> CLEVER LITTLE THINGS <span>✳</span> MADE FOR YOUR ROUTINE <span>✳</span> GOOD DESIGN, GOOD DAYS <span>✳</span> CLEVER LITTLE THINGS <span>✳</span></div></div>
      <CategoryTiles setCategory={setCategory}/>
      <section className="shop-section section" id="shop"><div className="section-heading shop-heading"><div><span className="eyebrow">THE ZAUQ LIVING EDIT</span><h2>Useful things.<br className="mobile-break"/> <em>Lovely finds.</em></h2></div><p>Meet your new everyday favourites. Picked for function, kept for the feeling.</p></div>
        <div className="shop-controls"><div className="filter-tabs">{['All','Kitchen','Home'].map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c==='All'?'Everything':c+' gadgets'}</button>)}</div><label className="sort-select"><SlidersHorizontal size={15}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></label></div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map(product=><ProductCard key={product.id} product={product} addToCart={addToCart}/>)}</div> : <div className="no-results"><span>✳</span><h3>No little finds just yet.</h3><p>Try another search or category.</p><button className="button button-dark" onClick={()=>{setSearch('');setCategory('All')}}>Show everything <ArrowRight size={16}/></button></div>}
        <div className="shop-bottom"><span>SHOWING {visibleProducts.length} OF {products.length} CLEVER FINDS</span><a href="#categories">Browse categories ↗</a></div>
      </section>
      <section className="newsletter"><div className="newsletter-star">✳</div><div><span className="eyebrow">GOOD THINGS, OCCASIONALLY</span><h2>A little note from<br/><em>the nest.</em></h2><p>New finds, clever ideas, and tiny ways to make home feel better.</p></div><form onSubmit={e=>{e.preventDefault(); alert('Thanks! Connect an email service to collect real subscribers.')}}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-input"><input id="email" type="email" placeholder="you@example.com" required/><button aria-label="Subscribe"><ArrowRight/></button></div><small>No spam. Just the good stuff.</small></form></section>
    </main>
    <Footer/>
    {notice && <div className="toast"><span>✓</span>{notice}</div>}
    <CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} cart={cart} updateQty={updateQty} removeItem={removeItem}/>
  </div>
}