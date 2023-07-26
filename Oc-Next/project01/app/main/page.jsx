import styles from './main.module.css'

const MainPage = () => {
    return (
        <section id="content" className={`con ${styles.main}`}>
            <div className="inner">
                <h2>메인페이지</h2>
                <ul>
                    <li><h3>타이틀1</h3></li>
                    <li><h3>타이틀2</h3></li>
                    <li><h3>타이틀3</h3></li>
                    <li><h3>타이틀4</h3></li>
                </ul>
            </div>
        </section>
    );
};

export default MainPage;