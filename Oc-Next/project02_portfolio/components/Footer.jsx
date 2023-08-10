"use client";
import React from 'react';
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className="inner">
                <button className="goTop"><a href="#">Go Top</a></button>
            </div>
        </footer>
    );
};