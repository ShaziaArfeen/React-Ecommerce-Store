import { CookingPot, LampDesk, ArrowUpRight } from 'lucide-react'
export default function CategoryTiles({ setCategory }) {
  return <section className="categories section" id="categories">
    <div className="section-heading"><div><span className="eyebrow">FIND YOUR KIND OF CLEVER</span><h2>Little things, <em>sorted.</em></h2></div><p>Useful, lovely, and ready to make your everyday a little easier.</p></div>
    <div className="category-grid">
      <button className="category-tile kitchen-tile" onClick={() => { setCategory('Kitchen'); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <img src="https://images.unsplash.com/photo-1777499455332-ec8800b7c197?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Kitchen countertop and appliances" /><span className="tile-icon"><CookingPot /></span><span className="tile-copy"><small>01 / THE HEART OF HOME</small><strong>Kitchen<br />gadgets.</strong><span>Make prep feel like play <ArrowUpRight size={17} /></span></span>
      </button>
      <button className="category-tile home-tile" onClick={() => { setCategory('Home'); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" alt="Calm modern home interior" /><span className="tile-icon"><LampDesk /></span><span className="tile-copy"><small>02 / YOUR HAPPY PLACE</small><strong>Home<br />gadgets.</strong><span>Make your space yours <ArrowUpRight size={17} /></span></span>
      </button>
    </div>
  </section>
}