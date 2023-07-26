import Link from "next/link";
import React from 'react';
import styles from "./navbar.module.css";

const menuList = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "About", url: "/about" },
    { id: 4, title: "Post", url: "/post" },
    { id: 5, title: "contact", url: "/contact" },
]
const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {
                    menuList.map(item => <li key={item.id}>
                        <Link href={item.url}>
                            {item.title}
                        </Link></li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;