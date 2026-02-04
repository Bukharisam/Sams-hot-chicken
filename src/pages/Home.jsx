import './Home.css';

export default function Home() {
  return (
    <>
    <nav>
      <div className="left-nav">
      <a href="/"><img className="logo-style" src="/images/logo.jpeg" alt="Sams Hot Chicken Logo" width="130" height="130" /></a>
      <h1> Sam's Hot Chicken </h1>
      </div>

      <a href="/menu">Menu</a> |
      <a href="/reviews">Reviews</a> |
      <a href="/checkout">Checkout</a> |
      <a href="/reviews">Reviews</a>
      <button className='order-now-style'> Order Now </button>
    </nav>
      <h1>Home Page</h1>
    </>
  );
}

