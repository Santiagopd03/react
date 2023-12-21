import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <h4>GameShop</h4>
      <div>
        <Link to="/">
          <button className="links">Productos</button>
        </Link>
        <Link to="/category/juegos">
          <button className="links">Juegos</button>
        </Link>
        <Link to="/category/perifericos">
          <button className="links">Perifericos</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
