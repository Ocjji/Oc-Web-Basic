'use client'
import { SNS_OPTIONS } from '@/contains';
import styles from './sns.module.css'

export const Sns = () => {
    return (
        <ul className={styles.sns}>
            {
                SNS_OPTIONS.map(item => <li>
                    <a href={item.URL} target={item.option}>
                        {item.icon}
                    </a>
                </li>)
            }
        </ul>
    );
}