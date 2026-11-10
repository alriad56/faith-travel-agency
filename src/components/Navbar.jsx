import { Link } from "react-router";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
            <li><Link to="/destination">Destination</Link></li> 
                  <li><a>Tour Packages</a></li>
                  <li><a>About Us</a></li>
                  <li><a>Contact</a></li>
                  <button className=" text-white p-2 bg-red-400 rounded-sm hover:bg-red-500 cursor-pointer ">Book Now </button>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;