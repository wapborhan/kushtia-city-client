import { Link, NavLink, useLocation } from "react-router-dom";
import { navData } from "./headData";
import useAuth from "../../hooks/useAuth";
import TopBar from "../../pages/root/home/header/TopBar";

const Header = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useAuth();
  const signOut = () => {
    logOut();
  };

  console.log(navData);

  return (
    <header className="th-header header-layout1">
      <TopBar />
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo.png"
                      style={{ width: "170px" }}
                      alt="Kushtia City"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    {navData.map(({ id, link, name }) => {
                      return (
                        <li key={id}>
                          <NavLink to={link} href="home-office-repair.html">
                            {name}
                          </NavLink>
                        </li>
                      );
                    })}
                    <li className="menu-item-has-children">
                      <a href="home-handyman.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
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
                  className="th-menu-toggle d-block d-lg-none"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
