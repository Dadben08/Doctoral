import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/log.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="log">
        <img src={logo} alt="logo" width={120} height={100} className="logo" />
        <p>Everything Doctoral</p>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "open-menu" : ""}>
        <li>
          <Link to="hero" smooth duration={500} offset={0} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Program" smooth duration={500} offset={-260} onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500} offset={-150} onClick={() => setMenuOpen(false)}>
            About us
          </Link>
        </li>
        <li>
          <Link to="Testimonial" smooth duration={500} offset={-260} onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth duration={500} offset={-260} onClick={() => setMenuOpen(false)}>
            Contact us
          </Link>
        </li>
        <li className="login-btn-mobile">
          <button className="btn" onClick={handleLogin}>Login</button>
        </li>
      </ul>

      <button className="btn login-btn-desktop" onClick={handleLogin}>Login</button>
    </nav>
  );
};

export default Navbar;
