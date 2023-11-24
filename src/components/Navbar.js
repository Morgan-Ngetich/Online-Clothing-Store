import { NavLink } from "react-router-dom";

export default function NavBar({ onLogout }) {
  return (
    <div className="navlink">
      <div className="nav-buttons">
        <NavLink exact to="/" activeClassName="active"><button>HOME</button></NavLink>
        <NavLink to="/shirts" activeClassName="active"><button>SHIRTS</button></NavLink>
        <NavLink to="/shoes" activeClassName="active"><button>SHOES</button></NavLink>
        <NavLink to="/trousers" activeClassName="active"><button>TROUSERS</button></NavLink>
        <NavLink to="/cart" activeClassName="active"><button><img className="cart-image" src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="cart"/></button></NavLink>
        <NavLink to ="/" activeClassName="active"><button onClick={onLogout} className="logout-btn">Log Out</button></NavLink>
      </div>     
    </div>
  );
}
