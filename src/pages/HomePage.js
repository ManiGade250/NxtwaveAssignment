import { useState } from 'react'
import FiltersSidebar from '../components/FiltersSidebar'
import ProductGrid from '../components/ProductGrid'
import productsData from '../utils/mockProducts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './HomePage.css'

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

const filteredProducts =
  selectedCategory === 'All'
    ? productsData
    : productsData.filter((product) => product.category === selectedCategory)


  return (
    <div className="home-page">
      <Navbar />
      <div className="main-content">
        <FiltersSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage

