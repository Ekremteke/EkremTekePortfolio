import React, { useState, useEffect, useRef } from "react";
import logo from "../images/vertu-motors-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, faLocationDot, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";






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
        <header className="header">

            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Logo" />
            </div>

            <span >
                <a href="#" onClick={() => toggleMenu("newCars")}>
                    New cars {"   "}
                    <FontAwesomeIcon className="faChevronDown" icon={faChevronDown} />
                </a>
                {isMenuActive("newCars") && (
                    <div className="dropdown-content" ref={dropdownRef}>
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                )}
            </span>
            <span >
                <a href="#" onClick={() => toggleMenu("usedCars")}>
                    Used cars{"   "}

                    <FontAwesomeIcon className="faChevronDown" icon={faChevronDown} />
                </a>
                {isMenuActive("usedCars") && (
                    <div className="dropdown-content" ref={dropdownRef}>
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                )}
            </span>
            <span >
                <a href="#" onClick={() => toggleMenu("servicing")}>
                    Servicing {"   "}
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {isMenuActive("servicing") && (
                    <div className="dropdown-content" ref={dropdownRef}>
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                )}
            </span>
            <span>
                <a href="#" onClick={() => toggleMenu("commercials")}>
                    Commercials {"   "}
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
                {isMenuActive("commercials") && (
                    <div className="dropdown-content" ref={dropdownRef}>
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                )}
            </span>
            <span className="search-box-container">
                <input className="search-box" type="text" placeholder='Search: "Make, model or location"' />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <FontAwesomeIcon icon={faMicrophone} className="mic-icon" />
            </span>


            <div className="icon-container">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <span className="text">Find us</span>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon icon={farHeart} className="icon" />
                <span className="text">Save</span>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon icon={faUserRegular} className="icon" />
                <span className="text">Log in</span>
            </div>

        </header>
    )
}

export default Navbar