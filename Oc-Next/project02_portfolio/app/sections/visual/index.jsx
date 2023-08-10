import React from 'react';
import styles from './visual.module.css';

export const Visual = () => {
    return (
        <section id="visual" className={styles.visual}>
            <div className={`inner ${styles.visual_inner}`}>
                <h2>
                    <span>Ocjji</span><br />
                    <span>PORTFOLIO</span>
                </h2>
                {/* <p>새로운 분야에 도전할 수 있는 .....</p> */}
                {/* <p>Next.js로 PORTFOLIO 사이트 제작</p> */}
            </div>
        </section>
    );
};