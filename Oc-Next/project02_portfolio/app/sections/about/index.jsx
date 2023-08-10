import React from 'react';
import styles from './about.module.css';
import { AiFillGithub } from 'react-icons/ai';

export const About = () => {
    return (
        <section id="about" className={`con ${styles.about}`}>
            <div className="inner">
                <h2>About me</h2>
                <div>
                    <div className={styles.about_wrap}>
                        <article className={styles.pic}>
                            <img src="/about/profile.jpg" alt="" />
                        </article>
                        <article className={styles.desc}>
                            <h3>김옥찌</h3>
                            <ul>
                                <li><b>이름</b><strong>김옥찌</strong></li>
                                <li><b>연락처</b><strong>010-1122-3344</strong></li>
                                <li><b>생년월일</b><strong>93.04.13</strong></li>
                                <li><b>주소</b><strong>인천광역시 연수구 연수동</strong></li>
                                <li><b>이메일</b><strong>ocjjiya@gmail.com</strong></li>
                                <li><b>학력</b><strong>대졸(4년제)</strong></li>
                                <li><b>자격증</b><strong>SQLD, 컴활 2급</strong></li>
                            </ul>
                            <p>
                                {/* <a href="#" target="_blank"><i><AiFillGithub /></i></a> */}
                                <a href="https://github.com/Ocjji" target="_blank"><i><AiFillGithub /></i></a>
                            </p>
                        </article>
                    </div>

                    <div className={styles.about_bottom}>
                        'Full Stack Developer'를 목표로 하는 주니어 개발자입니다. <br />
                        <br />
                        항상 지속 가능한 성장을 추구하며,<br />
                        회사의 실질적인 도움이 되는 풀스택 개발자로 일하고 싶습니다.<br />
                    </div>

                </div>
            </div>
        </section>
    );
};