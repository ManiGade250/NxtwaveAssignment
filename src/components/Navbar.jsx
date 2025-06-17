import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className="navbar-container">
       
        <div className="navbar-top-bar">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor</p>
        </div>

        <div className="navbar-main">
          <div className="navbar-logo-group">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/640px-Example_image.svg.png"
              alt="logo"
              className="navbar-logo"
            />
            <h1 className="navbar-title">LOGO</h1>
          </div>

         
          <nav className="navbar-links">
            <p>SHOP</p>
            <p>SKILLS</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p>CONTACT US</p>
          </nav>

          
          <div className="navbar-icons">
            <span title="Search">🔍</span>
            <span title="Wishlist">🤍</span>
            <span title="Cart">🛒</span>
            <span title="Profile">👤</span>
            <span className="navbar-lang">ENG ⌄</span>
          </div>
        </div>
      </header>

     
      <section className="navbar-main-content">
        <h2 className="main-heading">DISCOVER OUR PRODUCTS</h2>
        <p className="main-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
    </>
  )
}

export default Navbar
