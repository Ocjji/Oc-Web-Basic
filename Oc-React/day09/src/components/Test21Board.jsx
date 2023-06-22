import React, { useState } from 'react';
import '../assets/css/reset.css';
import './Test21.css';
import { useAxios } from "../hooks/useAxios";
import Test21List from "./Test21List";
import Test21Paging from "./Test21Paging";

const Test21Board = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data: posts, loading, error } = useAxios(url);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const totalPage = posts.length;
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const pageNumber = Math.ceil(totalPage / postsPerPage);
    const currentPosts = posts.slice(firstPost, lastPost);

    return (
        <main id="container" className="board">
            <section id="content">
                <table>
                    <caption>게시판</caption>
                    <colgroup>
                        <col className="id" />
                        <col className="title" />
                        <col className="body" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>타이틀</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <Test21List currentPosts={currentPosts} loading={loading} />
                    </tbody>
                </table>

                <p className="paging">
                    <Test21Paging pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
                </p>
            </section>
        </main>
    );
};

export default Test21Board;