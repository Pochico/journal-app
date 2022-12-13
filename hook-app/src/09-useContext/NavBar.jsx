import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav>
                <h2>
                    <Link to="/">Main App</Link>
                </h2>

                <ul>
                    <li>
                        <NavLink
                            to="/login"
                            className={(args) => {
                                args.isActive ?? 'active';
                            }}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={(args) => {
                                args.isActive ?? 'active';
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};
