import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className="th-header header-layout5">
      <TopBar />
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="row align-items-start justify-content-between">
              <div className="col-auto d-none d-lg-block">
                <div className="header-logo">
                  <a href="home-handyman.html">
                    <img
                      src="images/logo-tertiary.png"
                      style={{ width: "250px" }}
                      alt="KushtiaBD"
                    />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="menu-wrap">
                  <div className="header-logo d-block d-lg-none">
                    <a href="home-handyman.html">
                      <img
                        src="assets/img/logo-tertiary-black.svg"
                        alt="KushtiaBD"
                      />
                    </a>
                  </div>
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <a href="home-handyman.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="pricing.html">Price Plan</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="simple-icon searchBoxToggler d-none d-lg-inline-block"
                  >
                    <i className="far fa-search"></i>
                  </button>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <a href="contact.html" className="th-btn rounded-12 style3">
                    Get A Quote<i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
