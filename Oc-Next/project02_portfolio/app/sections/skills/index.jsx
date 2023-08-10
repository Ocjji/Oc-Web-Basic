import styles from './skills.module.css'
import './skills.css'
export const Skills = () => {
    return (
        <section id="skills" className={`con ${styles.skills_wrap}`}>
            <div className="inner">
                <h2>Skills </h2>
                <div className={styles.skills_box}>
                    <article>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>HTML</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} html`}>
                                    <span className={styles.tooltip}>95%</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>CSS</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} css`}>
                                    <span className={styles.tooltip}>80%</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>JavaScript</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} javascript`}>
                                    <span className={styles.tooltip}>90%</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>React</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} react`}>
                                    <span className={styles.tooltip}>85%</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>Nodejs</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} nodejs`}>
                                    <span className={styles.tooltip}>70%</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>Nextjs</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} nextjs`}>
                                    <span className={styles.tooltip}>50%</span>
                                </span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <ul className={styles.list}>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};