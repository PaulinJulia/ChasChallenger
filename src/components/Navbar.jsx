import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import ButtonOne from './ButtonOne';

function Navbar({ isLoggedIn }) {
    const navRef = useRef(null);  
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClicked = (item) => {
        setActiveItem(item === activeItem ? null : item);
        setMenuOpen(false);
    };

    
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false); 
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef}>
            <Link to={"/"} className={style.title}>
                Fantasy Chass
            </Link>
            <div className={style.menu} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {isLoggedIn ? (
                <LoggedInNav
                    handleItemClicked={handleItemClicked}
                    activeItem={activeItem}
                    menuOpen={menuOpen}
                />
            ) : (
                <LoggedOutNav
                    handleItemClicked={handleItemClicked}
                    activeItem={activeItem}
                    menuOpen={menuOpen}
                />
            )}
        </nav>
    );
}

function LoggedInNav({ handleItemClicked, activeItem, menuOpen }) {
    return (
        <ul className={`${menuOpen ? style.open : ""}`}>
            <li>
                <NavLink to={"/about"} onClick={() => handleItemClicked("about")}
                         className={`${activeItem === "about" ? style["active"] : ""}`}>
                    Om
                </NavLink>
            </li>
            <li>
                <NavLink to={"/howtoplay"} onClick={() => handleItemClicked("howtoplay")}
                         className={`${activeItem === "howtoplay" ? style["active"] : ""}`}>
                    Spelinstruktioner
                </NavLink>
            </li>
            <li>
                <NavLink to={"/characters"} onClick={() => handleItemClicked("characters")}
                         className={`${activeItem === "characters" ? style["active"] : ""}`}>
                    Spelkaraktärer
                </NavLink>
            </li>
            <li>
                <NavLink to={"/stories"} onClick={() => handleItemClicked("stories")}
                         className={`${activeItem === "stories" ? style["active"] : ""}`}>
                    Stories
                </NavLink>
            </li>
            <li>
                <Link to={"/"}>
                    <ButtonOne buttonText={"Logga ut"} className={style.logout} secondary extraClass="logoutButtonSpecial"/>
                </Link>
            </li>
        </ul>
    );
}

function LoggedOutNav({ handleItemClicked, activeItem, menuOpen }) {
    return (
        <ul className={`${menuOpen ? style.open : ""}`}>
            <li>
                <NavLink to={"/howtoplay"} onClick={() => handleItemClicked("howToPlay")}
                         className={`${activeItem === "howToPlay" ? style["active"] : ""}`}>
                    How to Play
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"} onClick={() => handleItemClicked("about")}
                         className={`${activeItem === "about" ? style["active"] : ""}`}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={"/login"} onClick={() => handleItemClicked("login")}
                         className={`${activeItem === "login" ? style["active"] : ""}`}>
                    Log in
                </NavLink>
            </li>
            <li>
                {/* <Link to={"/signup"}>
                    <ButtonOne buttonText={"Play Now!"} />
                </Link> */}
            </li>
        </ul>
    );
}

export default Navbar;
