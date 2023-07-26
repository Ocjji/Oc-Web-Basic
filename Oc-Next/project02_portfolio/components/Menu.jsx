"use client";
import Link from "next/link";
import { MENU_OPTIONS } from "@/contains";

export const Menu = () => {
    return (
        <nav>
            <ul>
                {
                    MENU_OPTIONS.map(item => <li key={item.id}>
                        <Link href={item.URL}>
                            {item.name}
                        </Link>
                    </li>)
                }
            </ul>
        </nav>
    );
};