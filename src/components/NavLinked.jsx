import React from "react";
import { Link, useLocation } from "react-router-dom";


const NavLinked = ({ to, children }) => {
    const location = useLocation();
    return (
        <Link
            className={`${
                location.pathname === to ? "text-indigo-400" : "text-white"
            } text-lg md:text-xl block mt-2 hover:text-blue-500`}
            to={to}
        >
            {children}
        </Link>
    );
};

export default NavLinked;
