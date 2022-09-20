import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>The Mini blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
