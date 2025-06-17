import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="email-subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p className="note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-section">
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="icons">
            <span>📷</span>
            <span>💼</span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
          </div>
        </div>
      </div>
      <p className="footer-copy">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  )
}

export default Footer

