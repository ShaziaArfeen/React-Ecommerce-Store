import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useState } from 'react'
export default function ProductCard({ product, addToCart }) {
  const [liked, setLiked] = useState(false)
  return <article className="product-card">
    <div className="product-image" style={{background: product.color}}>
      <img src={product.image} alt={product.name} loading="lazy" onError={e => {e.currentTarget.src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80'}}/>
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <button className={liked ? 'heart-button liked' : 'heart-button'} onClick={() => setLiked(!liked)} aria-label="Add to wishlist"><Heart size={18} fill={liked ? 'currentColor' : 'none'}/></button>
      <button className="quick-add" onClick={() => addToCart(product)}><ShoppingBag size={16}/> Add to bag</button>
    </div>
    <div className="product-info"><div className="product-category">{product.category} / GADGETS</div><h3>{product.name}</h3><div className="product-bottom"><div className="price">Rs. {product.price.toLocaleString('en-PK')} {product.oldPrice && <del>Rs. {product.oldPrice.toLocaleString('en-PK')}</del>}</div><span className="rating"><Star size={13} fill="currentColor"/> {product.rating}</span></div></div>
  </article>
}