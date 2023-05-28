import React, { useState, useEffect, useRef } from "react";
import logo from "../images/vertu-motors-logo.png";


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveMenu("");
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const toggleMenu = (menuName) => {
        setActiveMenu(menuName === activeMenu ? "" : menuName);
    };

    const isMenuActive = (menuName) => {
        return menuName === activeMenu;
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li className={`menu-item ${isMenuActive("newCars") ? "active" : ""}`}>
                        <a href="#" onClick={() => toggleMenu("newCars")}>
                            New cars
                            <i className={`fas fa-chevron-${isMenuActive("newCars") ? "up" : "down"}`}></i>
                        </a>
                        {isMenuActive("newCars") && (
                            <div className="dropdown-content" ref={dropdownRef}>
                                <a href="#">Option 1</a>
                                <a href="#">Option 2</a>
                                <a href="#">Option 3</a>
                            </div>
                        )}
                    </li>
                    <li className={`menu-item ${isMenuActive("usedCars") ? "active" : ""}`}>
                        <a href="#" onClick={() => toggleMenu("usedCars")}>
                            Used cars
                            <i className={`fas fa-chevron-${isMenuActive("usedCars") ? "up" : "down"}`}></i>
                        </a>
                        {isMenuActive("usedCars") && (
                            <div className="dropdown-content" ref={dropdownRef}>
                                <a href="#">Option 1</a>
                                <a href="#">Option 2</a>
                                <a href="#">Option 3</a>
                            </div>
                        )}
                    </li>
                    <li className={`menu-item ${isMenuActive("servicing") ? "active" : ""}`}>
                        <a href="#" onClick={() => toggleMenu("servicing")}>
                            Servicing
                            <i className={`fas fa-chevron-${isMenuActive("servicing") ? "up" : "down"}`}></i>
                        </a>
                        {isMenuActive("servicing") && (
                            <div className="dropdown-content" ref={dropdownRef}>
                                <a href="#">Option 1</a>
                                <a href="#">Option 2</a>
                                <a href="#">Option 3</a>
                            </div>
                        )}
                    </li>
                    <li className={`menu-item ${isMenuActive("commercials") ? "active" : ""}`}>
                        <a href="#" onClick={() => toggleMenu("commercials")}>
                            Commercials
                            <i className={`fas fa-chevron-${isMenuActive("commercials") ? "up" : "down"}`}></i>
                        </a>
                        {isMenuActive("commercials") && (
                            <div className="dropdown-content" ref={dropdownRef}>
                                <a href="#">Option 1</a>
                                <a href="#">Option 2</a>
                                <a href="#">Option 3</a>
                            </div>
                        )}
                    </li>
                    <li className="search-box">
                        <input type="text" placeholder='Search: "Make, model or location"' />
                        <i className="fas fa-microphone"></i>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                    </li>
                    <li>
                        <i className="far fa-heart"></i>
                    </li>
                    <li>
                        <i className="fas fa-sign-in-alt"></i>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar