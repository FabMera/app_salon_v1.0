import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinked = ({ to, children }) => {
    const location = useLocation();
    return (
        <Link
            className={`${
                location.pathname === to ? "text-white bg-sky-300 bg-opacity-25 " : "text-white"
            } text-base md:text-base block mt-2 hover:text-white hover:bg-sky-300 hover:bg-opacity-25 transition-all duration-200 ease-in-out rounded-md px-2 py-1 hover:transform hover:-translate-y-1 `}
            to={to}
        >
            {children}
        </Link>
    );
};

export default NavLinked;