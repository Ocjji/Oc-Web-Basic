"use client";
import Link from "next/link";
import React from 'react';
import { Menu, Sns } from ".";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div className="inner">
                <h1><Link href="/"> Ocjji's PortFolio Site</Link></h1>
                <Menu />
                <Sns />
            </div>
        </header>
    );
};