import { ArrowDownRight, ArrowUpRight, Play } from 'lucide-react'

export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-dot"/> LITTLE UPGRADES. BIG DIFFERENCE.</div>
      <h1>Make room for<br/><em>better living.</em></h1>
      <p>Thoughtful gadgets for the kitchen, home, and all the little moments in between.</p>
      <div className="hero-buttons"><a className="button button-dark" href="#shop">Explore the collection <ArrowUpRight size={18}/></a><a className="text-link" href="#story"><span className="play-icon"><Play size={13} fill="currentColor"/></span> Our little story</a></div>
      <div className="hero-proof"><div className="avatar-stack"><span>✦</span><span>✿</span><span>☺</span></div><div><strong>Loved in 2,000+ homes</strong><small>Small gadgets. Happier routines.</small></div></div>
    </div>
    <div className="hero-visual">
      <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Bright, thoughtfully styled modern kitchen"/><div className="image-label"><span>THE EVERYDAY EDIT</span><strong>Good things<br/>live here.</strong></div></div>
      <div className="floating-note note-top"><span className="note-icon">✳</span><span><b>Designed for daily life</b><small>Useful, not complicated.</small></span></div>
      <div className="floating-note note-bottom"><span className="rating-star">★</span><span><b>4.9/5 customer love</b><small>From real gadget fans</small></span></div>
      <div className="scribble">good<br/>things ↗</div>
    </div>
    <a href="#shop" className="scroll-cue"><ArrowDownRight size={17}/> SCROLL TO DISCOVER</a>
  </section>
}