import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
        {/* Optional badge */}
        {product.id === 1 && <span className="product-badge">NEW PRODUCT</span>}
        {product.id === 2 && <span className="product-outofstock">OUT OF STOCK</span>}
      </div>

      <h4 className="product-title">{product.title}</h4>
      <p className="product-brand">{product.brand}</p>
      <p className="product-price">₹{product.price}</p>

      <div className="product-actions">
        <a href="/" className="signin-link">Sign in</a> or <a href="/">Create an account</a> to see pricing
        <div className="product-icons">
          <span>♡</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
