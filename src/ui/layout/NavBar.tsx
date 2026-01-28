import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/global/qargo-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/our-menu", label: "Our Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/franchise", label: "Franchise" },
  { to: "/experiences", label: "Experiences" },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export const NavBar = () => {

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Qargo Coffe Logo" />
      </Link>

      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
