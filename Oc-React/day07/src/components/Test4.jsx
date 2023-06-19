import React from 'react';
import './Test4.css';
import styles from './Test4.module.css';

const Test4 = () => {
    return (
        <div className="wrap">
            <div className="box">test</div>
            <div className="box">test</div>
            <div className={styles.box}>test</div>
            <div className={styles.box}>test</div>

            {/* 더중클래스 */}
            <div className="bg size"></div>
            <div className={`${styles.bg} ${styles.size}`}></div>
            <div className={`size ${styles.bg}`}></div>

            {/* 다중크래스 */}
            <div className={['size', styles.bg].join(' ')}></div>
            <div className={[styles.size, styles.bg].join(' ')}></div>

            {/* 모듈에서 일반 스타일처럼 사용 */}
            <div className="con">test</div>
        </div>
    );
};

export default Test4;