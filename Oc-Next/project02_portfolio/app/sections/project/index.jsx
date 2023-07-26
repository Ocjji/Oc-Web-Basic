import React from 'react';
import styles from './project.module.css';

export const Project = () => {
    return (
        <seciton id="project" className={`con ${styles.project}`} >
            <div className="inner">
                <h2>Projects</h2>
                <div>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="/projects/project1-1.gif" alt="" />
                            </div>
                            <ul>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> Redux toolkit 팀프로젝트 </h3>
                            <h4> 주제 : 프로젝트 명 </h4>
                            <p>
                                <span>프로젝트 세부 설명 등등 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi repellat pariatur facilis corrupti cupiditate reiciendis repudiandae? Ducimus natus, suscipit expedita ea tenetur architecto amet nostrum vero! Mollitia, possimus tempore.</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 덧글, 게시판, 상세페이지, 카카오 로그인 조회  </strong></li>
                                <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> Redux toolkit, styled-component </strong></li>
                                <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li>
                            </ul>
                        </div>
                    </article>
                    {/*  */}
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="/projects/project1-1.gif" alt="" />
                            </div>
                            <ul>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> Redux toolkit 팀프로젝트 </h3>
                            <h4> 주제 : 프로젝트 명 </h4>
                            <p>
                                <span>프로젝트 세부 설명 등등 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi repellat pariatur facilis corrupti cupiditate reiciendis repudiandae? Ducimus natus, suscipit expedita ea tenetur architecto amet nostrum vero! Mollitia, possimus tempore.</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 덧글, 게시판, 상세페이지, 카카오 로그인 조회  </strong></li>
                                <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> Redux toolkit, styled-component </strong></li>
                                <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </seciton>
    );
};