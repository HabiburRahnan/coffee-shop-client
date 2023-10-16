import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addCoffee">Add Coffee</NavLink>
      <NavLink to="/updateCoffee/:id">Update Coffee</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Header;  
