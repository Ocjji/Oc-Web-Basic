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