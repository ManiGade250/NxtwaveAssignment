import './FiltersSidebar.css'

const FiltersSidebar = () => {
  const filters = [
    'CUSTOMIZABLE',
    'IDEAL FOR',
    'OCCASION',
    'WORK',
    'FABRIC',
    'SEGMENT',
    'SUITABLE FOR',
    'RAW MATERIALS',
    'PATTERN',
  ]

  return (
    <aside className="filters-sidebar">
      <div className="filters-header">
        <span>3425 ITEMS</span>
        <a href="/">HIDE FILTER</a>
      </div>

      {filters.map((filter) => (
        <div key={filter} className="filter-group">
          <div className="filter-title">
            <input type="checkbox" />
            <span>{filter}</span>
          </div>
          <select className="filter-select">
            <option>All</option>
          </select>
        </div>
      ))}
    </aside>
  )
}

export default FiltersSidebar
