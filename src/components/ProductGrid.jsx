import ProductCard from './ProductCard'
import './ProductGrid.css'

const ProductGrid = ({ products }) => {
  return (
    <main className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}

export default ProductGrid
