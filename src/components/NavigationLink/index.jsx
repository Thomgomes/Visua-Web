/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavigationLink({ link, className, text }) {
  return (
    <NavLink
      to={link}
      className={`hover:text-Visua-Placeholder/icon transition duration-200 ${className}`}
    >
      {text}
    </NavLink>
  );
}
