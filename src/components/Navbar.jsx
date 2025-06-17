import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar-container">
      {/* Top Bar */}
      <div className="navbar-top-bar">
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </div>

      {/* Main Navigation */}
      <div className="navbar-main">
        {/* Left - Logo */}
        <div className="navbar-logo-group">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/640px-Example_image.svg.png"
            alt="logo"
            className="navbar-logo"
          />
          <h1 className="navbar-title">LOGO</h1>
        </div>

        {/* Center - Menu */}
        <nav className="navbar-links">
          <p>SHOP</p>
          <p>SKILLS</p>
          <p>STORIES</p>
          <p>ABOUT</p>
          <p>CONTACT US</p>
        </nav>

        {/* Right - Icons */}
        <div className="navbar-icons">
          <span title="Search">🔍</span>
          <span title="Wishlist">🤍</span>
          <span title="Cart">🛒</span>
          <span title="Profile">👤</span>
          <span className="navbar-lang">ENG ⌄</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
